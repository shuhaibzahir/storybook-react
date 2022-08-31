import Button from "../components/Button";

export default {
    title:'Button',
    component: Button,
    argTypes: { handleClick:{action:"handleClick"}}
}


const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args ={
    label:"This is New Button",
    type:"primary",
    handleClick: ()=>{console.log("this")}
}