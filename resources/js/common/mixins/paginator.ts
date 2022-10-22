import {defineComponent} from "vue";
import {fromParameterToNumber} from "../helpers/stringHelpers";

export default defineComponent({
    data() {
        return {
            url: '' as string,
            page: -1 as number,
            totalPages: 1 as number,
            forceRedirect: false as boolean,
            pageHistory: [] as string[],
            fetchDataFunction: () => {
            }
        };
    },
    computed: {
        pageFromUrl(): number {
            return fromParameterToNumber(this.$route.params.page);
        }
    },
    methods: {
        updatePage(event: number) {
            this.page = event;
            this.forceRedirect = true;
        }
    },
    beforeMount() {
        this.page = this.pageFromUrl >= 1 ? this.pageFromUrl : 1;

        this.fetchDataFunction();
    },
    beforeRouteUpdate(to, from, next) {
        let pageToUrl = fromParameterToNumber(to.params.page)

        this.page = pageToUrl >= 1 ? pageToUrl : 1;
        this.forceRedirect = false;

        next();
    },
    watch: {
        page(newValue, oldValue) {
            if (newValue !== oldValue || this.forceRedirect) {
                if (this.pageHistory.length >= 2) {
                    if (!this.forceRedirect && this.pageHistory[this.pageHistory.length - 2] === newValue) {
                        this.pageHistory.pop();
                    } else {
                        this.pageHistory.push(newValue);
                        this.$router.push({path: `${this.url}/${newValue}`});
                    }
                } else {
                    if (this.pageHistory[0] !== newValue) {
                        this.pageHistory.push(newValue);
                        this.$router.push({path: `${this.url}/${newValue}`});
                    }
                }
                if (oldValue !== -1) {
                    this.fetchDataFunction();
                }
            }

            this.forceRedirect = false;
        }
    }

});
