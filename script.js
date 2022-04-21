// ACTION
const BUY_PHONE = 'BUY_PHONE'

function buyPhone() {
    return{
        type: BUY_PHONE
    }
}
// ACTION


const initialState = {
    phones : 5
}

//REDUCER = (PrevState,Action) => newState
const reducer = (state = initialState,action) => { // Pur function

    switch (action.type) {
        case BUY_PHONE: // J'achète
            return{
                ...state, // Je récupère tous les states (uniquement phone dans cet exemple)
                phones: state.phones - 1 // newStatde de phones = state actuel de phone -1
            }
    
        default:
            return state
    }
} 
//REDUCER

const store = Redux.createStore(reducer); // Je stocke dans une constante, Redux qui est importé en CDN dans le html
console.log(store); // Voir pdf redux P12 pour comprendre log 
const availablePhone = document.getElementById('count'); // Je pointe l'id count dans le html
availablePhone.innerHTML = store.getState().phones;
/**
 * Je créé une const (availablePhone) qui contient (#count)
 * Je lui injecte le state de mon reducer (store) via la méthode (getState) qui pointe sur (phones)
 */


document.getElementById('buy-phone').addEventListener('click',function(){
    store.dispatch(buyPhone());
})
/**
 * Je récupère l'id du button html (buy-phone)
 * J'ajoute un évent lors du click qui fait appel à une function
 * cette f appel  la méthode (dispatch) de mon reducer (store)
 * dispatch prend en param la function (buyphone) pour décrémenter de 1
 */

store.subscribe(()=>{
    console.log(store.getState());
    availablePhone.innerHTML = store.getState().phones; //Affichage
})
/**
 * J'appelle la f (subscribe) de mon reducer (store)
 * 
 */