import Header from "../Header";

import {
  Container,
  Description,
  Start,
  Heading,
  PredictButton,
  Image,
  Banner,
  ProductContainer,
  ProductHeading,
  ProductSpan,
  ProductDescription,
  ProductButton,
  CustomSwipe,
  ProductImage,
  CustomSwiperSlide,
  ProductName,
} from "./style";

import { useNavigate } from "react-router";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const images = [
  {
    name: "Fertilizers",
    url: "https://fertilizer-machine.net/wp-content/uploads/2018/06/types-of-fertilizer.jpg",
  },
  {
    name: "Pesticides",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFn2_pB18Kaed1OJwKZXBrdDymqDfqEBoitw&s",
  },
  {
    name: "Seeds",
    url: "https://media.istockphoto.com/id/1126541751/photo/hands-planting-the-seeds-into-the-dirt.jpg?s=612x612&w=0&k=20&c=aVUr7F_H4ZSJX89Nmiw59F8WvneKeg-YsBoOiDQw0SA=",
  },
  {
    name: "Plant Growth Regulators",
    url: "https://krishibazaar.in/public/blogs/mELfXiofTpg8wooEUBnpTUWXmi3If4LwJheupra3.jpg",
  },
  {
    name: "Soil Conditioners",
    url: "https://cdn.shopify.com/s/files/1/2561/3316/files/What_is_a_Soil_Conditioner-min_4e648d0b-66eb-4c47-8b4b-411abe317d75.jpg?v=1684816576",
  },
  {
    name: "Gardening Tools",
    url: "https://www.rasnetwork.org/wp-content/uploads/2023/10/Best-Gardening-Tools-Names-with-Pictures-and-Their-Uses.webp",
  },
  {
    name: "Packaging & Storage",
    url: "https://media.istockphoto.com/id/1351105286/photo/stock-of-coffee-in-a-warehouse.jpg?s=612x612&w=0&k=20&c=U8qRUECoXBHGAgYnaRbiPXpTNQXtyiC7kbxHO1UruBs=",
  },
];

function Home() {
  const navigate = useNavigate();

  const goToPredict = () => {
    navigate("/predict");
  };

  return (
    <>
      <Header />
      <Container>
        <Description>
          <Start>
            <Heading>
              AI-Driven Insights <br /> for a <br /> Healthier Farm
            </Heading>
            <PredictButton type="button" onClick={goToPredict}>
              Predict
            </PredictButton>
          </Start>
          <Banner>
            <Image
              src="https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740720570/palm-tree-pot-isolated_slm2xs.png"
              alt="image"
            />
          </Banner>
        </Description>
        <ProductContainer>
          <div>
            <ProductHeading>
              Smart Solutions for a <br />{" "}
              <ProductSpan>Healthy Harvest</ProductSpan>
            </ProductHeading>
            <ProductDescription>
              From detection to protection—find the best fertilizers, <br />
              pesticides, and tools for your farm.
            </ProductDescription>
            <ProductButton type="button" onClick={() => navigate("/products")}>
              Explore the Marketplace
            </ProductButton>
          </div>
          <CustomSwipe
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            loop={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {images.map((image) => (
              <CustomSwiperSlide key={image.name}>
                <ProductImage src={image.url} alt={image.name} />
                <ProductName>{image.name}</ProductName>
              </CustomSwiperSlide>
            ))}
          </CustomSwipe>
        </ProductContainer>
      </Container>
    </>
  );
}

export default Home;
