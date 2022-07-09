
import React from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
// import { Icon } from "@rneui/themed";


const data = [{
    
    id:"123",
    title:"Get a ride",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAABTdJREFUeF7tmFdPK0kQhXsIl5xzzvDA//8XvCILg4gmmZwMxtiz+nrVs7N9x/bU2kZXS7XEC67prj596lQIdnZ2QqMrFQKBgpUKJ2ukYKXHSsESYKVgKVgSBAS2qlkKlgABgakyS8ESICAwVWYpWAIEBKbKLAVLgIDAVJmlYAkQEJgqsxQsAQICU2WWgiVAQGAahGEonsF/fHyY3d1dwTF/jun29rbp7u7+Tw4pWALYFCwpWETi6+ur+fz8TPVpqVQy5+fnqWz/NKO5uTnT2dkpcisIAjM4OGgss8rlsjk9PTX39/eiTX6CcXt7u1ldXf0HLBh1eHho3t7efsL9RXeEiVNTUwZ2WWYRgnt7e6JNfoLx8PCwWVpaMh0dHfa6Fqy7uztzfHz8E+6f+o6E3/r6uunv74++CSqVSnh5eWn4+47FS42NjVlasyqVik0W+Xy+6vFDQ0P2hZ0wk5DQ11Y+8OzsrJmeno78LBaLJiiVSiHi/uvXL3uJrq4u09bWZh3HKTLf8/OzBTNttqwFOi+2ublpent7IzMcOTg4MBS7/kqyRzawJzG1YvX19ZmVlRWLhcPh6urKBMVi0WbDnp6emud+fX0ZPri+vm7YP18L2BCmHB0d/ba3z0QejMd9enpq2I9qGywuLpqJiYno50KhYLLZ7N+alfZUQgZ9w9lGVzzLsBcPRjje3NxEW+MwdrDLhSyPdXFx0ejxVb8fGBiwrHIhz52JKsssB9b7+7u5vb01j4+PNtxGRkbsH8WYc7aZDsfrF+c5PlDCEI70b9Q3ccY/PDzY31u5fFbFQz4ol8sh4lqtIgdpNog3n2gMIdNoXYZwszd66bQB5p6cnFigeKwkIFsFFlrFuc6fOKs4M8jn81bgay1fY4hcwqEZLQ9Zh6LPJRW0Ef0aHx+P/keI5nI5y/xWLl8anFa5RJJ6+Eccj46O/kv0MplMU3ynnoFlSYuHgfmA1crlZ90kQqQGi7JiYWEh0i90jVAkphtdhDiAuVQd34+yBZ1qVZngzkq6n98CpgbLzxLNbr79zMcleBAKz5eXl0bfo+73lCiEvluUJtRy8ZUaLP/1Aevs7MyWEs1YhDjMdX0Ye6JfnNHqaQghuLW1FWVeX9jd/VKD1UpmJZUJ35kFybpkZfdQ1aYwqcFCgJeXl6MNaYPQrGaEiF+lI66ud/yOPnB+ft5MTk5GZ3InKnZ/BdlsNkRE6y2aypmZmSidk1abkQ19rSK8KRHQD1cMJ1X39fyV/E6vSuSwamXfIJfLhZTy9RYxHR9X0JbUq8/q7emHX5xFfqkSr+7r7Sv53ddidJJ70S38xqxCoRC6FqPaIUmFI1U2rVEjqxYg39Xu+HpVawJi51lcmssn1TLEMmDF+8NqEwIJcOxLxewq97SNdL3Zl8QHbJEW/pxGVtMrbKNGGkTRCoAgG5DKKdQIPXchPmhGOPjzIvat9gB+j9isvtSB6tdXtabGohENjlL3NDpL2tjYsNOMNOVBUnVPQtrf35eSKNF+bW3N0Pu6VUuL7dQhzpykHRFe6AlQSdNMideEHiFYK/z8/fxMTNFYa1Ii8cfPhCS7avOyIJPJhKRvUidFWXykjI5QIoB2o2LOBfyRTK3w8y/sN9vNmpjGszyPACGqTTdSF6WS1/q/2ipYgpdVsBQsAQICU2WWgiVAQGCqzFKwBAgITJVZCpYAAYGpMkvBEiAgMFVmKVgCBASmyiwFS4CAwFSZpWAJEBCYKrMULAECAlNlloIlQEBgqsxSsAQICEyVWQqWAAGB6V9WhQ0gVxlpfwAAAABJRU5ErkJggg==",
    screen:"MapScreen",
},
{
    id:"456",
    title:"Order Food",
    image:"https://www.google.com/search?q=food+images&rlz=1C1UEAD_enUS998US998&sxsrf=ALiCzsZAA4iJMwj4qaDSzsTYuQ2PzryxAg:1657300771499&tbm=isch&source=iu&ictx=1&vet=1&fir=AlrYNQJfZIy9vM%252Cc1W1wgDZbrCp_M%252C_%253BnZZp3zczCNbKrM%252CRB__2DxE3HJa8M%252C_%253BpaE0XIGe7FP9MM%252CW4es-fXnlDqXoM%252C_%253BX8ZiIbomPhy43M%252CRB__2DxE3HJa8M%252C_%253BiO6bGTHk02vweM%252CW4es-fXnlDqXoM%252C_%253B_QyzkG16g_ehEM%252ChrCB_kGeQhoFyM%252C_%253BRXTbcbJ0UD59TM%252CW4es-fXnlDqXoM%252C_%253BqYQc_fW0jtrPFM%252CxUHtSlv1a_sZBM%252C_%253B4VXFatqPlD5rjM%252CRB__2DxE3HJa8M%252C_%253B7S5RstVFHHt0oM%252CuoGL5EjeApZ6LM%252C_%253BzBMLEjqMRYe5CM%252Cc1W1wgDZbrCp_M%252C_%253BHpTVHrdaUUksmM%252CzazhXlEcVtQqOM%252C_%253B-IO4LzVeuXTNhM%252CW4es-fXnlDqXoM%252C_%253BTNlthV9_FAtrKM%252CteNhXgqUnYRCrM%252C_&usg=AI4_-kSOTx2AcApCZGPeiT-ft62OpCcXrg&sa=X&ved=2ahUKEwi8rJW-5un4AhXCcDABHSHgCdwQ9QF6BAgSEAE#imgrc=nZZp3zczCNbKrM",
    screen:"FoodScreen",
},
{
    id:"789",
    title:"Drive my Car",
    image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.theconversation.com%2Ffiles%2F447426%2Foriginal%2Ffile-20220220-22-1vv5nrp.jpg%3Fixlib%3Drb-1.1.0%26rect%3D0%252C838%252C5000%252C2499%26q%3D45%26auto%3Dformat%26w%3D668%26h%3D324%26fit%3Dcrop&imgrefurl=https%3A%2F%2Ftheconversation.com%2Fus%2Ftopics%2Fdriver-safety-13479&tbnid=Cc-h5kr548MAEM&vet=12ahUKEwja0bSC5-n4AhVi8lMKHW-vBXgQMygdegUIARClAg..i&docid=5PIb7OgoNdIj5M&w=668&h=324&q=driver%20images&ved=2ahUKEwja0bSC5-n4AhVi8lMKHW-vBXgQMygdegUIARClAg",
    screen:"DriveMyCar",
}

];

const NavOptions = () => {
  return (


    <FlatList
        data={data}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) =>(
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
        <View>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            {/* <Icon style={tw`p-2 bg-black rounded-full w-10 mt-3`} name="arrowright" color="green" type='antdesign'/> */}
        </View>
        </TouchableOpacity>

       ) }
    />
  )
};

export default NavOptions


