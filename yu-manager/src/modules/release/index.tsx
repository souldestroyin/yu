import { defineComponent } from "vue";
import { getResourceList } from './apis/resource';
import { ElTabs, ElTabPane}from 'element-plus'

export default defineComponent({
    name: 'Release',
    setup() {

        const modulesList = 


        return () => (
            <ElTabs>
                <ElTabPane></ElTabPane>
            </ElTabs>
        )
    }
})