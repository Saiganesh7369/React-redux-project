import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: white;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`;

const Header = styled.div`
    font-size: 1.2em;
    margin-bottom: 8px;
`;

const Meta = styled.div`
    color: #888;
    margin-bottom: 4px;
`;

function ProductComponent() {
    const products = useSelector((state) => state.allproducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <ProductCard key={id}>
                <Link to={`/product/${id}`}>
                    <ImageContainer>
                        <img src={image} alt={title} />
                    </ImageContainer>
                    <Content>
                        <Header>{title}</Header>
                        <Meta className="price">$ {price}</Meta>
                        <Meta>{category}</Meta>
                    </Content>
                </Link>
            </ProductCard>
        );
    });

    return <ProductGrid>{renderList}</ProductGrid>;
}

export default ProductComponent;
