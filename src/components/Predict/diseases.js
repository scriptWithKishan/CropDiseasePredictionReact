const diseaseData = [
  {
    id: 1,
    name: "Apple Scab",
    category: "Apple",
    original: "Apple___Apple_scab",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/apple_banner_fjclgl.jpg",
    preventions: [
      "Prune trees to improve air circulation",
      "Remove and destroy fallen leaves in autumn",
      "Use resistant apple varieties if available",
      "Apply fungicides early in the season",
      "Ensure proper spacing between trees to reduce moisture buildup",
    ],
  },
  {
    id: 2,
    name: "Apple Black Rot",
    category: "Apple",
    original: "Apple___Black_rot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/apple_banner_fjclgl.jpg",
    preventions: [
      "Prune and remove infected branches",
      "Clear fallen fruit and debris from the orchard",
      "Avoid tree injuries that expose the bark",
      "Apply copper-based sprays during dormancy",
      "Maintain balanced soil fertility to improve tree vigor",
    ],
  },
  {
    id: 3,
    name: "Cedar Apple Rust",
    category: "Apple",
    original: "Apple___Cedar_apple_rust",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/apple_banner_fjclgl.jpg",
    preventions: [
      "Remove nearby juniper plants, which are alternate hosts",
      "Apply fungicides at bud break and continue as directed",
      "Prune infected branches promptly",
      "Choose resistant apple varieties",
      "Regularly inspect and remove rust galls from junipers",
    ],
  },
  {
    id: 4,
    name: "Healthy Apple",
    category: "Apple",
    original: "Apple___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/apple_banner_fjclgl.jpg",
    text: "Your apple is healthy",
  },
  {
    id: 5,
    name: "Healthy Blueberry",
    category: "Blueberry",
    original: "Blueberry___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/blueberry_banner_sy1z4j.jpg",
    text: "Your blueberry is healthy",
  },
  {
    id: 6,
    name: "Powdery Mildew",
    category: "Cherry (including sour)",
    original: "Cherry_(including_sour)___Powdery_mildew",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/cherry_banner_dfjnly.webp",
    preventions: [
      "Prune trees to improve light penetration and airflow",
      "Remove infected leaves and twigs immediately",
      "Avoid excessive nitrogen fertilization",
      "Apply sulfur or potassium bicarbonate-based fungicides",
      "Water early in the day to allow leaves to dry",
    ],
  },
  {
    id: 7,
    name: "Healthy Cherry",
    category: "Cherry (including sour)",
    original: "Cherry_(including_sour)___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/cherry_banner_dfjnly.webp",
    text: "Your cherry is healthy",
  },
  {
    id: 8,
    name: "Cercospora Leaf Spot / Gray Leaf Spot",
    category: "Corn (maize)",
    original: "Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820361/corn_banner_blwurj.jpg",
    preventions: [
      "Rotate crops to break the disease cycle",
      "Use resistant corn hybrids",
      "Remove plant debris after harvest",
      "Improve soil drainage and reduce leaf wetness",
      "Apply foliar fungicides during early infection stages",
    ],
  },
  {
    id: 9,
    name: "Common Rust",
    category: "Corn (maize)",
    original: "Corn_(maize)___Common_rust_",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820361/corn_banner_blwurj.jpg",
    preventions: [
      "Plant resistant corn hybrids",
      "Rotate crops to reduce disease buildup",
      "Avoid dense planting to improve airflow",
      "Remove infected plants promptly",
      "Apply fungicides during early rust development",
    ],
  },
  {
    id: 10,
    name: "Northern Leaf Blight",
    category: "Corn (maize)",
    original: "Corn_(maize)___Northern_Leaf_Blight",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820361/corn_banner_blwurj.jpg",
    preventions: [
      "Use disease-resistant hybrids",
      "Rotate crops regularly to reduce soil-borne pathogens",
      "Avoid overhead irrigation to keep leaves dry",
      "Apply fungicides during key growth stages",
      "Remove infected debris to limit pathogen spread",
    ],
  },
  {
    id: 11,
    name: "Healthy Corn",
    category: "Corn (maize)",
    original: "Corn_(maize)___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820361/corn_banner_blwurj.jpg",
    text: "Your corn is healthy",
  },
  {
    id: 12,
    name: "Black Rot",
    category: "Grape",
    original: "Grape___Black_rot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820362/grape_banner_indgzm.jpg",
    preventions: [
      "Prune vines to improve airflow and sunlight exposure",
      "Remove infected leaves, fruit, and branches immediately",
      "Clean fallen debris to minimize fungal spores",
      "Apply fungicides during bud break",
      "Avoid overhead watering",
    ],
  },
  {
    id: 13,
    name: "Esca (Black Measles)",
    category: "Grape",
    original: "Grape___Esca_(Black_Measles)",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820362/grape_banner_indgzm.jpg",
    preventions: [
      "Prune infected vines and destroy affected wood",
      "Improve vineyard drainage",
      "Use resistant rootstocks when available",
      "Apply fungicides after pruning cuts",
      "Maintain healthy soil fertility",
    ],
  },
  {
    id: 14,
    name: "Leaf Blight (Isariopsis Leaf Spot)",
    category: "Grape",
    original: "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820362/grape_banner_indgzm.jpg",
    preventions: [
      "Prune vines to reduce humidity buildup",
      "Remove infected leaves and debris regularly",
      "Apply copper-based fungicides",
      "Avoid excessive nitrogen fertilization",
      "Improve vineyard ventilation",
    ],
  },
  {
    id: 15,
    name: "Healthy Grape",
    category: "Grape",
    original: "Grape___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820362/grape_banner_indgzm.jpg",
    text: "Your grape is healthy",
  },
  {
    id: 16,
    name: "Huanglongbing (Citrus Greening)",
    category: "Orange",
    original: "Orange___Haunglongbing_(Citrus_greening)",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/orange_banner_urimc3.jpg",
    preventions: [
      "Remove infected trees to prevent spread",
      "Control psyllid populations with insecticides",
      "Use certified disease-free planting materials",
      "Maintain tree health with proper nutrition",
      "Monitor trees regularly for symptoms",
    ],
  },
  {
    id: 17,
    name: "Bacterial Spot",
    category: "Peach",
    original: "Peach___Bacterial_spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/peach_banner_infe9n.jpg",
    preventions: [
      "Use resistant varieties where possible",
      "Avoid overhead watering",
      "Apply copper-based sprays early in the season",
      "Rotate crops to prevent recurrence",
      "Remove infected leaves and plants",
    ],
  },
  {
    id: 18,
    name: "Healthy Peach",
    category: "Peach",
    original: "Peach___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/peach_banner_infe9n.jpg",
    text: "Your peach is healthy",
  },
  {
    id: 19,
    name: "Bacterial Spot",
    category: "Bell Pepper",
    original: "Pepper,_bell___Bacterial_spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/bell_pepper_banner_fpvwqy.jpg",
    preventions: [
      "Use resistant varieties where possible",
      "Avoid overhead watering",
      "Apply copper-based sprays early in the season",
      "Rotate crops to prevent recurrence",
      "Remove infected leaves and plants",
    ],
  },
  {
    id: 20,
    name: "Healthy Bell Pepper",
    category: "Bell Pepper",
    original: "Pepper,_bell___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820360/bell_pepper_banner_fpvwqy.jpg",
    text: "Your bell pepper is healthy",
  },
  {
    id: 21,
    name: "Early Blight",
    category: "Potato",
    original: "Potato___Early_blight",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820896/potato_banner_tnkzo7.jpg",
    preventions: [
      "Plant resistant potato and tomato varieties",
      "Remove and destroy infected plants promptly",
      "Apply fungicides before symptoms appear",
      "Avoid watering leaves; water at the base",
      "Rotate crops to prevent soil reinfection",
    ],
  },
  {
    id: 22,
    name: "Late Blight",
    category: "Potato",
    original: "Potato___Late_blight",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820896/potato_banner_tnkzo7.jpg",
    preventions: [
      "Plant disease-resistant varieties",
      "Avoid planting potatoes near infected tomato plants",
      "Apply copper-based fungicides at first sign of disease",
      "Destroy all infected plant debris after harvest",
      "Water plants at the base to keep foliage dry",
    ],
  },
  {
    id: 23,
    name: "Healthy Potato",
    category: "Potato",
    original: "Potato___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820896/potato_banner_tnkzo7.jpg",
    text: "Your potato is healthy",
  },
  {
    id: 24,
    name: "Healthy Raspberry",
    category: "Raspberry",
    original: "Raspberry___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/rasberry_banner_vj0o2b.jpg",
    text: "Your raspberry is healthy",
  },
  {
    id: 25,
    name: "Healthy Soybean",
    category: "Soybean",
    original: "Soybean___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820359/soybean_banner_n1bm7n.jpg",
    text: "Your soybean is healthy",
  },
  {
    id: 26,
    name: "Powdery Mildew",
    category: "Squash",
    original: "Squash___Powdery_mildew",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820359/sqash_banner_htsnlo.jpg",
    preventions: [
      "Plant resistant varieties of squash",
      "Ensure proper spacing between plants for air circulation",
      "Apply neem oil or sulfur-based fungicides early",
      "Water at the base to keep leaves dry",
      "Remove and destroy infected plant material",
    ],
  },
  {
    id: 27,
    name: "Leaf Scorch",
    category: "Strawberry",
    original: "Strawberry___Leaf_scorch",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/strawberry_banner_ylgunx.jpg",
    preventions: [
      "Remove and destroy infected leaves",
      "Apply fungicides containing myclobutanil",
      "Avoid overhead irrigation",
      "Maintain proper plant spacing",
      "Use disease-free planting stock",
    ],
  },
  {
    id: 28,
    name: "Healthy Strawberry",
    category: "Strawberry",
    original: "Strawberry___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/strawberry_banner_ylgunx.jpg",
    text: "Your strawberry is healthy",
  },
  {
    id: 29,
    name: "Bacterial Spot",
    category: "Tomato",
    original: "Tomato___Bacterial_spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Use resistant tomato varieties",
      "Avoid overhead watering",
      "Apply copper-based fungicides early",
      "Rotate crops to prevent recurrence",
      "Remove and destroy infected plants",
    ],
  },
  {
    id: 30,
    name: "Early Blight",
    category: "Tomato",
    original: "Tomato___Early_blight",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Plant resistant tomato varieties",
      "Remove infected leaves and plants promptly",
      "Apply fungicides before symptoms appear",
      "Avoid watering leaves; water at the base",
      "Rotate crops to prevent soil reinfection",
    ],
  },
  {
    id: 31,
    name: "Late Blight",
    category: "Tomato",
    original: "Tomato___Late_blight",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Plant disease-resistant tomato varieties",
      "Avoid planting near infected potatoes",
      "Apply copper-based fungicides at first sign of disease",
      "Destroy all infected plant debris after harvest",
      "Water plants at the base to keep foliage dry",
    ],
  },
  {
    id: 32,
    name: "Leaf Mold",
    category: "Tomato",
    original: "Tomato___Leaf_Mold",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Use resistant tomato varieties",
      "Improve greenhouse ventilation",
      "Avoid overhead watering",
      "Apply fungicides at first sign of disease",
      "Remove and destroy infected leaves",
    ],
  },
  {
    id: 33,
    name: "Septoria Leaf Spot",
    category: "Tomato",
    original: "Tomato___Septoria_leaf_spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Remove infected leaves and debris",
      "Avoid overhead watering",
      "Apply fungicides early in the season",
      "Rotate crops to prevent recurrence",
      "Use disease-free seeds and transplants",
    ],
  },
  {
    id: 34,
    name: "Spider Mites (Two-Spotted Spider Mite)",
    category: "Tomato",
    original: "Tomato___Spider_mites_Two-spotted_spider_mite",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Use insecticidal soap or neem oil",
      "Introduce natural predators like ladybugs",
      "Keep plants well-watered to reduce stress",
      "Remove heavily infested leaves",
      "Avoid over-fertilizing with nitrogen",
    ],
  },
  {
    id: 35,
    name: "Target Spot",
    category: "Tomato",
    original: "Tomato___Target_Spot",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Use resistant tomato varieties",
      "Remove and destroy infected leaves",
      "Apply fungicides early in the season",
      "Avoid overhead watering",
      "Rotate crops to prevent soil-borne pathogens",
    ],
  },
  {
    id: 36,
    name: "Tomato Yellow Leaf Curl Virus",
    category: "Tomato",
    original: "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Control whitefly populations with insecticides",
      "Use reflective mulches to deter insects",
      "Remove infected plants immediately",
      "Plant resistant tomato varieties",
      "Use protective row covers for young plants",
    ],
  },
  {
    id: 37,
    name: "Tomato Mosaic Virus",
    category: "Tomato",
    original: "Tomato___Tomato_mosaic_virus",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    preventions: [
      "Use virus-free certified seeds",
      "Disinfect tools regularly with bleach solution",
      "Avoid smoking near tobacco-sensitive plants",
      "Remove and destroy infected plants",
      "Wash hands before handling plants",
    ],
  },
  {
    id: 38,
    name: "Healthy Tomato",
    category: "Tomato",
    original: "Tomato___healthy",
    url: "https://res.cloudinary.com/dxvpw3wrz/image/upload/v1740820358/tomato_banner_n2ir1f.jpg",
    text: "Your tomato is healthy",
  },
];

export default diseaseData;