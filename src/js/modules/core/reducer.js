import
{
    FETCH_ARTICLE
} from './actionTypes'

// currently has sample data
const initialState = {
    isFetching: false,
    isFetched: false,
    error: null,
    entities: {
        articles: {
            0: {
                id: 0,
                title: "Apples Rain in New York City",
                slug: "apples-rain-in-new-york-city",
                content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus aliquet nibh ac commodo. Nam mauris neque, congue non dolor sit amet, volutpat iaculis quam. Suspendisse tristique, enim sagittis ultricies gravida, felis arcu vestibulum ante, non venenatis ex eros et metus. Mauris consectetur sagittis est non varius. In tempor maximus odio ac eleifend. Curabitur tincidunt enim odio, eu pellentesque nisi pharetra sit amet. Aenean eleifend massa nec posuere pellentesque.</p><p>Duis quis velit at diam dapibus euismod. Integer eleifend condimentum auctor. Suspendisse ultrices metus et augue bibendum efficitur. Sed rutrum, nulla in consectetur consectetur, tellus dolor dictum elit, et fermentum orci sapien at eros. Mauris congue quam in arcu malesuada, vel venenatis leo maximus. Quisque varius, felis in eleifend convallis, arcu ipsum molestie ipsum, vitae scelerisque dolor turpis in sapien. Phasellus placerat turpis ligula, quis dapibus erat gravida ut. Vestibulum auctor ex eu interdum tincidunt. Maecenas nec ante quis eros malesuada ultrices ac sit amet justo. Aliquam vestibulum mollis semper. Cras interdum aliquam interdum.</p><p>Pellentesque nec nisl eget mauris luctus porttitor. In sagittis elit et tellus pulvinar, sed posuere elit cursus. Vestibulum imperdiet neque arcu, quis placerat erat tempor nec. Cras quis eleifend massa. Morbi dapibus erat eget est vehicula blandit et id ex. Aenean finibus ultrices interdum. Mauris posuere nibh eu velit placerat venenatis. Etiam sed elit vel nibh congue dapibus nec non eros. Praesent est arcu, fermentum et ipsum vel, pulvinar tempor ipsum.</p><p>Aenean elementum justo in lacus posuere, quis fringilla velit blandit. Suspendisse condimentum eros a nunc elementum, id tincidunt velit pharetra. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse faucibus vulputate velit, sit amet dignissim tortor aliquam non. Vestibulum elementum tincidunt orci, vulputate mattis lorem dapibus in. Donec hendrerit tellus scelerisque, ornare libero nec, fermentum dolor.</p><p>Nam aliquam purus at quam tempor venenatis. Donec mi est, gravida eu nunc non, volutpat bibendum dui. Cras suscipit eu orci eget interdum. Praesent fermentum egestas leo eu malesuada. Nullam eros tortor, elementum quis viverra vel, aliquet non purus. Aliquam sagittis non nulla et elementum. In dictum auctor velit at aliquet. Donec eleifend mattis neque, et consectetur augue tincidunt in. Phasellus sagittis consequat tempor. Aliquam at lorem dolor. Mauris in libero sed dolor iaculis faucibus at nec dui.</p><p>In faucibus libero a elit condimentum ultrices. Mauris iaculis est vel mattis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ultricies nisl nec neque viverra maximus facilisis tincidunt arcu. Praesent eu velit in purus interdum condimentum. In non vestibulum massa, in volutpat tortor. Pellentesque vitae arcu mauris. Suspendisse cursus mi sed laoreet tincidunt. Donec interdum sapien urna, at tempor leo facilisis et. Phasellus erat sapien, pulvinar vel molestie eget, finibus sit amet nunc. Morbi a magna sed lacus faucibus ultrices ut quis lacus.</p><p>Aenean sapien eros, pharetra in consectetur nec, tincidunt eget est. Duis venenatis quam at sagittis pharetra. Sed vestibulum tellus quis magna luctus suscipit. Nunc non diam est. Donec nulla dolor, luctus id magna nec, mattis accumsan sapien. Nullam dictum porta ante sed aliquam. Nunc id nulla ut augue blandit bibendum a sit amet mi.</p><p>Donec lobortis mauris non neque mattis dictum. Curabitur placerat enim sed diam venenatis eleifend. Etiam facilisis, odio et porta hendrerit, nunc arcu lacinia risus, eu tincidunt felis leo sed mauris. Nullam purus eros, pretium sit amet nulla at, feugiat hendrerit ex. Aenean quis felis metus. In finibus lorem metus, dictum sagittis velit viverra eget. Aenean euismod luctus pellentesque. Duis at tortor metus. Suspendisse faucibus libero ut rhoncus auctor. Proin eu lectus ac nunc laoreet vulputate ac et nibh. Donec at aliquet lacus.</p>",
                volume: 108,
                issue: 1,
                section: 0,
            },
            1: {
                id: 1,
                title: "McCain's Miraculous Recovery",
                slug: "mccains-miraculous-recovery",
                content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus aliquet nibh ac commodo. Nam mauris neque, congue non dolor sit amet, volutpat iaculis quam. Suspendisse tristique, enim sagittis ultricies gravida, felis arcu vestibulum ante, non venenatis ex eros et metus. Mauris consectetur sagittis est non varius. In tempor maximus odio ac eleifend. Curabitur tincidunt enim odio, eu pellentesque nisi pharetra sit amet. Aenean eleifend massa nec posuere pellentesque.</p><p>Duis quis velit at diam dapibus euismod. Integer eleifend condimentum auctor. Suspendisse ultrices metus et augue bibendum efficitur. Sed rutrum, nulla in consectetur consectetur, tellus dolor dictum elit, et fermentum orci sapien at eros. Mauris congue quam in arcu malesuada, vel venenatis leo maximus. Quisque varius, felis in eleifend convallis, arcu ipsum molestie ipsum, vitae scelerisque dolor turpis in sapien. Phasellus placerat turpis ligula, quis dapibus erat gravida ut. Vestibulum auctor ex eu interdum tincidunt. Maecenas nec ante quis eros malesuada ultrices ac sit amet justo. Aliquam vestibulum mollis semper. Cras interdum aliquam interdum.</p><p>Pellentesque nec nisl eget mauris luctus porttitor. In sagittis elit et tellus pulvinar, sed posuere elit cursus. Vestibulum imperdiet neque arcu, quis placerat erat tempor nec. Cras quis eleifend massa. Morbi dapibus erat eget est vehicula blandit et id ex. Aenean finibus ultrices interdum. Mauris posuere nibh eu velit placerat venenatis. Etiam sed elit vel nibh congue dapibus nec non eros. Praesent est arcu, fermentum et ipsum vel, pulvinar tempor ipsum.</p><p>Aenean elementum justo in lacus posuere, quis fringilla velit blandit. Suspendisse condimentum eros a nunc elementum, id tincidunt velit pharetra. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse faucibus vulputate velit, sit amet dignissim tortor aliquam non. Vestibulum elementum tincidunt orci, vulputate mattis lorem dapibus in. Donec hendrerit tellus scelerisque, ornare libero nec, fermentum dolor.</p><p>Nam aliquam purus at quam tempor venenatis. Donec mi est, gravida eu nunc non, volutpat bibendum dui. Cras suscipit eu orci eget interdum. Praesent fermentum egestas leo eu malesuada. Nullam eros tortor, elementum quis viverra vel, aliquet non purus. Aliquam sagittis non nulla et elementum. In dictum auctor velit at aliquet. Donec eleifend mattis neque, et consectetur augue tincidunt in. Phasellus sagittis consequat tempor. Aliquam at lorem dolor. Mauris in libero sed dolor iaculis faucibus at nec dui.</p><p>In faucibus libero a elit condimentum ultrices. Mauris iaculis est vel mattis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque ultricies nisl nec neque viverra maximus facilisis tincidunt arcu. Praesent eu velit in purus interdum condimentum. In non vestibulum massa, in volutpat tortor. Pellentesque vitae arcu mauris. Suspendisse cursus mi sed laoreet tincidunt. Donec interdum sapien urna, at tempor leo facilisis et. Phasellus erat sapien, pulvinar vel molestie eget, finibus sit amet nunc. Morbi a magna sed lacus faucibus ultrices ut quis lacus.</p><p>Aenean sapien eros, pharetra in consectetur nec, tincidunt eget est. Duis venenatis quam at sagittis pharetra. Sed vestibulum tellus quis magna luctus suscipit. Nunc non diam est. Donec nulla dolor, luctus id magna nec, mattis accumsan sapien. Nullam dictum porta ante sed aliquam. Nunc id nulla ut augue blandit bibendum a sit amet mi.</p><p>Donec lobortis mauris non neque mattis dictum. Curabitur placerat enim sed diam venenatis eleifend. Etiam facilisis, odio et porta hendrerit, nunc arcu lacinia risus, eu tincidunt felis leo sed mauris. Nullam purus eros, pretium sit amet nulla at, feugiat hendrerit ex. Aenean quis felis metus. In finibus lorem metus, dictum sagittis velit viverra eget. Aenean euismod luctus pellentesque. Duis at tortor metus. Suspendisse faucibus libero ut rhoncus auctor. Proin eu lectus ac nunc laoreet vulputate ac et nibh. Donec at aliquet lacus.</p>",
                volume: 108,
                issue: 1,
                section: 0,
            },
        },
        sections: {
            0: {
                id: 0,
                name: "News",
                slug: "news",
                parent_id: null
            },
            1: {
                id: 1,
                name: "Opinions",
                slug: "opinions",
                parent_id: null
            },
            2: {
                id: 2,
                name: "Features",
                slug: "features",
                parent_id: null
            },
        },
    },
    request: null
}

const reducer = (state={...initialState}, action)=>
{
    switch(action.type)
    {
        case 'core/FETCH_ARTICLE_PENDING': {
            return {...state, isFetching: true}
            break;
        }
        case 'core/FETCH_ARTICLE_REJECTED': {
            return {...state, isFetching: false, error: action.payload}
            break;
        }
        case 'core/FETCH_ARTICLE_FULFILLED': {
            return {...state,
                isFetching: false,
                isFetched: true,
                request: action.payload
            }
            break;
        }
    }
    return state;
};

export default reducer