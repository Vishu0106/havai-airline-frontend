import {ActionGroup, Item , Text} from '@adobe/react-spectrum'
import Draw from '@spectrum-icons/workflow/Draw';
import Delete from '@spectrum-icons/workflow/Delete';
function EditDeleteIcon() {
  return (
    <div>
    <ActionGroup buttonLabelBehavior="hide" staticColor='black'>
  <Item key="edit">
    <Draw />
    <Text>Edit</Text>
  </Item>
  <Item key="delete" >
    <Delete />
    <Text>Delete</Text>
  </Item>
</ActionGroup>
    </div>
  )
}

export default EditDeleteIcon