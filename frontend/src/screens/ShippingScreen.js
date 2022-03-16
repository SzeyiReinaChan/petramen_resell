import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }

    return <FormContainer>
        <br />
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <br />
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter address'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter city'
                    value={city}
                    required
                    onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter postal code'
                    value={postalCode}
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <br />
            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter country'
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <br />
            <Button type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>


}

export default ShippingScreen
