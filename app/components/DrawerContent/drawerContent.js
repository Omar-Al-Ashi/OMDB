import Home from "../Home";
import Settings from "../About/About";
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
    mounted() {
        SelectedPageService.getInstance().selectedPage$
            .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },
    data() {
        return {
            Home: Home,
            Settings: Settings,
            selectedPage: ""
        };
    },
    components: {
        Home,
        Settings
    },
    methods: {
        onNavigationItemTap(component) {
            this.$navigateTo(component, {
                clearHistory: true
            });
            utils.closeDrawer();
        }
    }
};
