import * as utils from "~/shared/utils";
import SelectedPageService from "../../shared/selected-page-service";

export default {

    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Settings");
    },

    computed: {
    },

    methods: {
        onDrawerButtonTap() {
            utils.showDrawer();
        }
    }
};
