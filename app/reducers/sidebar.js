import {TOGGLE_SIDEBAR} from 'types'
export default function(state={
    showSidebar:false
},action={}){
    switch(action.type){
        case TOGGLE_SIDEBAR:
            return Object.assign({},{
                showSidebar:!state.showSidebar
            });
        default: 
            return state;
    }
}