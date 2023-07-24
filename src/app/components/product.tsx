
import { Box, Card, Stack } from '@twilio-paste/core'
import Link from 'next/link'

export default function Product({ product }) {
    return (
        <>
            <Box element="PRODUCT_BOX">
                <Card>
                    <Stack spacing='space10' orientation="vertical" element="PRODUCT">
                        {/*<h3>{product.name}</h3>*/}
                        <p>
                            <Link href="/products">
                                <img src={product.image} alt={product.name} />
                            </Link>
                        </p>
                        <div className="view-product">
                            <Link href={'/products/' + product.id}>View product</Link>
                        </div>
                    </Stack>
                </Card>
            </Box>
        </>
    )
}