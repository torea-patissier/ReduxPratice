// ACTION
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

function buyPhone() {

    return{
        type: BUY_PHONE
    }

}

function buyTablet(){

    return{
        type: BUY_TABLET
    }

}
// ACTION


const initialState = {
    phones : 5,
    tablets : 10
}

//REDUCER = (PrevState,Action) => newState
const reducer = (state = initialState,action) => { // Pur function

    switch (action.type) {
        case BUY_PHONE: // J'achète
            return{
                ...state, // Je récupère tous les states (uniquement phone dans cet exemple)
                phones: state.phones - 1 // newStat de de phones = state actuel de phone -1
            }
            break;
        
        case BUY_TABLET:
            return{
                ...state,
                tablets: state.tablets + 1
            }
            break;
        
        default:
            return state
            break;
    }
    
} 
//REDUCER

const store = Redux.createStore(reducer); // Je stocke dans une constante, Redux qui est importé en CDN dans le html
console.log(store); // Voir pdf redux P12 pour comprendre log 

const availablePhone = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');

//AFFICHAGGE
availableTablet.innerHTML = store.getState().tablets; 
availablePhone.innerHTML = store.getState().phones;
/**
 * Je créé une const (availablePhone) qui contient (#count)
 * Je lui injecte le state de mon reducer (store) via la méthode (getState) qui pointe sur (phones)
 */


//TRAITEMENT
document.getElementById('buy-phone').addEventListener('click',function(){
    store.dispatch(buyPhone());
})
document.getElementById('buy-tablet').addEventListener('click',function(){ //Traitement
    store.dispatch(buyTablet());
})
/**
 * Je récupère l'id du button html (buy-phone)
 * J'ajoute un évent lors du click qui fait appel à une function
 * cette f appel  la méthode (dispatch) de mon reducer (store)
 * dispatch prend en param la function (buyphone) pour décrémenter de 1
 */


//NOUVEL AFFICHAGE
store.subscribe(()=>{
    availablePhone.innerHTML = store.getState().phones;
    availableTablet.innerHTML = store.getState().tablets; 
})
/**
 * J'appelle la f (subscribe) de mon reducer (store)
 * 
 */