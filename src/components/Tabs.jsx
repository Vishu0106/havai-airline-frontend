import { TabList , Item , TabPanels } from '@adobe/react-spectrum'
import React from 'react'

function Tabs() {
  return (
    <Tabs aria-label="Chat log density example" density="compact">
  <TabList>
    <Item key="item1">
      John Doe
    </Item>
    <Item key="item2">
      Jane Doe
    </Item>
    <Item key="item3">
      Joe Bloggs
    </Item>
  </TabList>
  <TabPanels>
    <Item key="item1">
      There is no prior chat history with John Doe.
    </Item>
    <Item key="item2">
      There is no prior chat history with Jane Doe.
    </Item>
    <Item key="item3">
      There is no prior chat history with Joe Bloggs.
    </Item>
  </TabPanels>
</Tabs>
  )
}

export default Tabs;