import {POSITION, useToast} from "vue-toastification";
import GeneralToast from "../common/components/Toasts/GeneralToast.vue";
import {CommonOptions} from "vue-toastification/dist/types/types";
import {ToastMessage} from "../common/types/utils";


const toast = useToast();

const config: CommonOptions = {
    position: POSITION.TOP_RIGHT,
    timeout: 10000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

let toastComponent = {
    component: GeneralToast,
    props: {
        title: '',
        subtitle: ''
    },
}

export default {
    default(message: ToastMessage) {
        toastComponent.props = message;

        toast(toastComponent, config);
    },
    success(message: ToastMessage) {
        toastComponent.props = message;

        toast.success(toastComponent, config);
    },
    info(message: ToastMessage) {
        toastComponent.props = message;

        toast.info(toastComponent, config);
    },
    warning(message: ToastMessage) {
        toastComponent.props = message;

        toast.warning(toastComponent, config);
    },
    error(message: ToastMessage) {
        toastComponent.props = message;

        toast.error(toastComponent, config);
    }
}
