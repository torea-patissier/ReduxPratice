// ACTION
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';
//ACTION

//FONCTION
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

function buyTV(){

    return{
        type: BUY_TV
    }

}
//FONCTION

//STATE INITIAL
const initialStateForPhoneAndTablet = {
    phones : 5,
    tablets : 10,
}

const initialStateForTv = {
    tv: 12
}
//STATE INITIAL

//REDUCER
const phonesAndTabletReducer = (state = initialStateForPhoneAndTablet , action) => { // Pur function

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
                tablets: state.tablets - 1
            }
            break;
        
        default:
            return state
            break;
    }
    
}

const tvReducer = (state = initialStateForTv , action) => { // Pur function

    switch (action.type) {

        case BUY_TV: // J'achète
            return{
                ...state, // Je récupère tous les states (uniquement tv dans cet exemple)
                tv: state.tv - 1 
            }
            break;
        
        default:
            return state
            break;
    }
    
} 
//REDUCER

//COMBINER LES REDUCERS
const rootReducer = Redux.combineReducers({ 
    reducerPhonesTablet : phonesAndTabletReducer,
    reducerTv: tvReducer
})

//CREER LE STORE AVEC LA COMBINE DES REDUCERS
const store = Redux.createStore(rootReducer); // Je stocke dans une constante, Redux qui est importé en CDN dans le html

//RECUPERATION DES ID POUR INJECTION DE DATA
const availablePhone = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
const availableTv= document.getElementById('count-tv');


//AFFICHAGE
console.log('Initial state',store.getState()); // Pour comprendre le state
availableTablet.innerHTML = store.getState().reducerPhonesTablet.tablets; 
availablePhone.innerHTML = store.getState().reducerPhonesTablet.phones;
availableTv.innerHTML = store.getState().reducerTv.tv;
/**
 * Je créé une const (availablePhone) qui contient (#count)
 * Je lui injecte le state de mon phonesAndTabletReducer (store) via la méthode (getState) qui pointe sur (phones)
 */


//TRAITEMENT
document.getElementById('buy-phone').addEventListener('click',function(){
    store.dispatch(buyPhone());
})
document.getElementById('buy-tablet').addEventListener('click',function(){ //Traitement
    store.dispatch(buyTablet());
})
document.getElementById('buy-tv').addEventListener('click',function(){ //Traitement
    store.dispatch(buyTV());
})
/**
 * Je récupère l'id du button html (buy-phone)
 * J'ajoute un évent lors du click qui fait appel à une function
 * cette f appel  la méthode (dispatch) de mon phonesAndTabletReducer (store)
 * dispatch prend en param la function (buyphone) pour décrémenter de 1
 */


//NOUVEL AFFICHAGE
store.subscribe(()=>{
    availablePhone.innerHTML = store.getState().reducerPhonesTablet.phones;
    availableTablet.innerHTML = store.getState().reducerPhonesTablet.tablets;
    availableTv.innerHTML = store.getState().reducerTv.tv;
    console.log('Updated state',store.getState());
})
/**
 * J'appelle la f (subscribe) de mon phonesAndTabletReducer (store)
 * 
 */