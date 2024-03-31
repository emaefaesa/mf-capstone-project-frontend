import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import catsService from '../../services/cats.service'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import CatsDetails from '../../components/CatsDetails/CatsDetails'
import { useDisclosure } from '@chakra-ui/react'
import Modal from '../../components/Modal/Modal'
import CustomForm from '../../components/CustomForm/CustomForm'
import { CAT_OPTIONS } from '../../consts'

const CatsSinglePage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()
    const [cat, setCat] = useState({
        name: "",
        location: { coordinates: [] },
        image: "",
    })

    const [editCatData, setEditCatData] = useState({
        name: "",
        location: { coordinates: [] },
        image: "",
    })


    const CAT_DETAILS = [
        { name: "Name", content: cat.name },
        { name: "Location", content: cat.location.coordinates.join("") },
        { name: "Image", content: cat.image },
    ]


    const getSingleCat = async () => {
        try {
            const singleCat = await catsService.getOneCat(id)
            setCat(singleCat)
        } catch (error) {
            console.log("Error xiki =>", error)
        }
    }


    useEffect(() => {
        getSingleCat()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setEditCatData({ ...editCatData, [name]: value })
    }

    /*  useEffect(() => {
         console.log(editCatData)
     }, [editCatData])
  */

    /*  const handleSubmit = async (e) => {
 
         e.preventDefault()
         const updatedCat = await catsService.editCat(id, editCatData)
         console.log("cat updated", updatedCat)
         try {
         } catch (error) {
             console.log("Error!", error)
         }
     } */

    /* 
        const handleSubmit = async (e) => {
            e.preventDefault()
            const updatedCat = await catsService.editCat(
                id,
                editCatData
            )
            console.log("UPDATED!", updatedCat)
    
            setShowModal(false)
            setCat(updatedCat)
            try {
            } catch (error) {
                console.log("Error =>", error)
            }
        }
    
     */


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedCat = await catsService.editCat(id, editCatData);
            console.log("UPDATED!", updatedCat);
            setShowModal(false);
            setCat(updatedCat);
        } catch (error) {
            console.log("Error =>", error);
            // Aquí puedes agregar lógica adicional para manejar el error, por ejemplo, mostrar un mensaje al usuario
        }
    };



    return (

        /*   <FormPageLayout backgroundImage={cat.image}>
              <CatsDetails onOpen={onOpen} catsDetails={CAT_DETAILS} />
              {isOpen && <Modal isOpen={isOpen} onClose={onClose}>
                  <CustomForm
                      options={CAT_OPTIONS}
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      title={"Edit your Cat"}
                  />
              </Modal>}
          </FormPageLayout>
   */


        <FormPageLayout backgroundImage={cat.image}>
            <CatsDetails
                onOpen={() => setShowModal(true)}
                catsDetails={CAT_DETAILS}
            />
            {showModal && (
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CustomForm
                        options={CAT_OPTIONS}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        title={"Edit your Cat!"}
                    />
                </Modal>
            )}
        </FormPageLayout>
    )

}


export default CatsSinglePage

