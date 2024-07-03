import { Provider, defaultTheme } from "@adobe/react-spectrum";
import {Item, TabList, TabPanels, Tabs} from '@adobe/react-spectrum'
import TerminalsTab from "./TerminalsTab";
import ContactDetails from "./ContactDetails";
import TransportTab from "./TransportTab";
function Tabss() {
  return (
    <Provider theme={defaultTheme} colorScheme="light" UNSAFE_style={{backgroundColor:'white'}}>
            <Tabs aria-label="History of Ancient Rome">
                <TabList>
                  <Item key="FoR"><p className="font-medium">Terminal</p></Item>
                  <Item key="MaR"><p className="font-medium">Transport</p></Item>
                  <Item key="Emp"><p className="font-medium">ContactDetails</p></Item>
                </TabList>
                <TabPanels>
                  <Item key="FoR">
                    <TerminalsTab />
                  </Item>
                  <Item key="MaR">
                    <TransportTab />
                  </Item>
                  <Item key="Emp">
                    <ContactDetails />
                  </Item>
                </TabPanels>
            </Tabs>
    </Provider>
  )
}

export default Tabss;