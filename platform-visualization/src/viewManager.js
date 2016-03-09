/**
 * Responsible for drawing the p2p network
 * @author Miguel Celedon
 */
function ViewManager() {
    
    var SECTION_SIZE = window.MAX_DISTANCE * 1.5;
    
    this.views = {};
    
    var self = this;
    
    /**
     * Convert a vector to the relative coordiantes of a section
     * @author Miguel Celedon
     * @param   {String}        sectionName The name of the section
     * @param   {Object}        vector      The original vector
     * @returns {THREE.Vector3} A new vector with the positions relative to the section center
     */
    this.translateToSection = function(sectionName, vector) {
        
    //    if(window.map.views[sectionName].title !== "Render") {
            sectionName = window.map.views[sectionName] || window.map.start;
            var section = sectionName.section || [0, 0];
            var newVector = vector.clone();
        
            if(typeof section !== 'undefined') {
        
                newVector.x = vector.x + section[0] * SECTION_SIZE;
                newVector.y = vector.y + section[1] * SECTION_SIZE;
            }
        
            return newVector;
    //    }
    };
    
    /**
     * Creates the structure of the transition functions depending of the view
     * @author Miguel Celedon
     * @lastmodifiedBy Emmanuel Colina
     * @lastmodifiedBy Ricardo Delgado
     * @param   {String} view The name of the view to process
     * @returns {Object} An object containing all the possible functions that can be called
     */
    function setTransition(view) {
        
        var transition = 5000;
        var actions = {},
            enter = null, exit = null, reset = null, zoom = null, backButton = null;
        
        if(window.map.views[view].enabled === true) {
        
            switch(view) {

                case 'table':
                    enter = function() {

                        window.tableEdit.addButton();

                        window.tileManager.transform(true, 3000 + transition);
                        
                        setTimeout(function(){
                            window.signLayer.transformSignLayer();
                         }, 9500);
                        
                        //Special: If coming from home, delay the animation
                        if(window.actualView === 'home')
                            transition = transition + 3000;

                        window.headers.transformTable(transition);

                        window.developer.delete();
                    };
                    
                    backButton = function() {
                        
                        window.changeView();
            
                        setTimeout(function(){
                            window.signLayer.transformSignLayer();
                        }, 2500);
                    };                    
                    
                    exit = function() {
                        window.tileManager.rollBack();

                        buttonsManager.removeAllButtons();
                    };

                    reset = function() {
                        window.tileManager.rollBack();

                        window.headers.transformTable(2000); // nuevo

                        setTimeout(function(){
                            window.signLayer.transformSignLayer();
                         }, 3000);
                    };

                    break;
                case 'stack':
                    enter = function() {

                        if(!window.headersUp) {
                            headers.showHeaders(transition);
                            window.headersUp = true;
                        }
                        window.headers.transformStack(transition);

                        window.helper.hideBackButton();

                    };

                    exit = function() {
                        window.headers.deleteArrows(transition);
                    };

                    break;
                case 'home':
                    enter = function() {
                        window.logo.stopFade(2000);
                    };
                    
                    exit = function() {
                        if(window.toggleHelp){
                            window.helper.hide('navigation', 1000, true);
                            window.helper.hide('zoom', 1000, true);
                            window.helper.hide('slide', 1000, true);
                            window.helper.hide('return', 1000, true);
                            window.toggleHelp = false;
                        }
                    };
                    break;
                case 'book':
                case 'readme':
                case 'whitepaper':
                    enter = function() {
                        setTimeout(function(){
                            window.magazine.init(view);
                        }, 2000);    
                    };
                    
                    reset = function() {
                        window.magazine.actionSpecial();
                    };

                    exit = function() {
                        window.magazine.remove();
                    };

                    break;
                case 'workflows': // nuevo
                    enter = function() {
                        if(!window.headersUp) {
                            headers.showHeaders(transition);
                            window.headersUp = true;
                        }
                        window.flowManager.getHeaderFLow();
                        window.headers.transformWorkFlow(transition);
                        window.workFlowEdit.createButtonWorkFlow(); // nuevo
                    };
                    
                    backButton = reset = function() { // nuevo TODO
                        

                        switch(window.workFlowEdit.getActionType().type){

                            case 'insert':
                                window.camera.loseFocus();

                                window.buttonsManager.removeAllButtons(); // nuevo

                                window.workFlowEdit.createButtonWorkFlow(); // nuevo

                                window.helper.hideBackButton(); // nuevo

                                window.workFlowEdit.deleteFlow(); // nuevo

                                window.session.displayLoginButton(true); // nuevo

                                window.workFlowEdit.getActionType().type = null; // nuevo

                                break;

                            case 'save':
                                break;
                            default:
                                window.flowManager.showWorkFlow();

                                window.workFlowEdit.createButtonWorkFlow();

                                break;

                        }
                        /*if(window.workFlowEdit.getFlowsEdit()[0] !== undefined){ // nuevo

                            window.camera.loseFocus();

                            window.buttonsManager.removeAllButtons(); // nuevo

                            window.workFlowEdit.createButtonWorkFlow(); // nuevo

                            window.helper.hideBackButton(); // nuevo

                            window.workFlowEdit.deleteWorFlowEdit(); // nuevo

                            window.session.displayLoginButton(true); // nuevo
                        }
                        else{

                            window.flowManager.showWorkFlow();
                            window.workFlowEdit.createButtonWorkFlow();
                        }*/
                    };

                    exit = function() {
                        window.flowManager.deleteAllWorkFlows();
                        window.buttonsManager.removeAllButtons(); // nuevo
                    };
                    
                    break;
                case 'network':
                    enter = function() {
                        window.networkViewer = new NetworkViewer();
                        window.networkViewer.load();
                        
                    };
                    
                    exit = function() {
                        window.networkViewer.unload();
                        window.networkViewer = null;
                        
                        window.camera.disableFreeMode();
                        window.camera.freeView = false;
                    };
                    
                    zoom = function() {
                        
                        window.camera.enableFreeMode();
                        window.helper.showBackButton();
                        
                        if(window.networkViewer)
                            window.networkViewer.setCameraTarget();
                    };
                    
                    reset = function() {
                        if(window.networkViewer)
                            window.networkViewer.reset();
                        
                        window.helper.hideBackButton();
                        window.camera.resetPosition();
                    };
                    
                    backButton = function() {
                        
                        if(window.networkViewer && window.networkViewer.closeChild() === null) {
                            reset();
                        }
                    };
                    
                    break;
                case 'developers':
                    enter = function(){
                        window.developer.getDeveloper();

                        setTimeout(function(){
                            window.developer.animateDeveloper();
                        }, 2000);        
                    };
                    
                    backButton = reset = function() {
                        setTimeout(function(){
                            window.developer.animateDeveloper();
                        }, 4000);
                        
                        window.changeView();
                    };

                    exit = function() {
                        window.developer.delete();
                    };

                    break;
                default:
                    break;
            }
        }
        
        actions = {
            enter : enter || function(){},
            exit : exit || function(){},
            reset : reset || function(){},
            zoom : zoom || function(){},
            backButton : backButton || function(){}
        };
        
        return actions;
    }
    
    /**
     * Create a basic skeleton of the views, with exit, enter and reset functions as empty
     * @author Miguel Celedon
     */
    function initViews() {
        
        for(var view in window.map.views) {
            self.views[view] = setTransition(view);
        }
    }
    
    initViews();
}