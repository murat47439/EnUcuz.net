export interface Message{
    message : string,
}
export interface Category{
    id : number,
    name: string,
    parent_id: number,
    created_at: string
}
export interface Favorite{
    id: number,
    user_id: number,
    product_id: number,
    created_at:string,
    deleted_at : string
}
export interface Product{
    id: number,
    name: string,
    image_url: string,
    brand_id: number,
    category_id: number,
    created_at: string,
    updated_at: string
}
export interface Review{
    id: number,
    user_id: number,
    product_id: number,
    content: string,
    rating: number,
    created_at: string,
    updated_at: string
}
export interface IdParam{
    id : number 
}
export interface CreateCategoryRequest{
    name: string,
    parent_id: number,
}
export interface CompareProductsRequest{
    id: number,
    id2: number
}
export interface CreateCategoryResponse{
    message: string,
    category : Category
}
export interface CategoriesListResponse{
    categories: Category[]
}
export interface ProductsListResponse{
    message: string,
    Products?: Product[]
}
export interface PaginationRequest{
    page?: number,
    search?: string,
}
export interface UpdateCategoryRequest{
    id: number,
    name: string,
    parent_id: number
}
export interface AddFavoriteRequest{
    id: number
}
export interface FavoritesListResponse{
    message: string,
    favourites: Favorite[]
}
export interface ProductDetail{    

    
        product: {
            id: number,
            name:string,
            brand_name: string,
            brand_id: number,
            image_url: string,
            category_id: number,
            category_name: string
        },
        phone_detail: {
            current_os: string,
            upgradable_to: string,
            chipset: string,
            cpu: string,
            gpu: string,
            dimensions: string,
            weight:string,
            build: string,
            sim_info: string,
            network_technology: string,
            network_speed: string,
            "5g": string,
            "4g": string,
            "3g": string,
            "2g": string,
            gps: string,
            nfc: string,
            radio: string,
            wlan: string,
            bluetooth: string,
            usb: string,
            card_slot: string
        },
        battery: {
            technology: string,
            capacity: string,
            charging: string
        },
        display: {
            type: string,
            size: string,
            resolution: string,
            aspect_ratio: string,
            hdr: string,
            refreshRate:string ,
            ppi: string,
            brightness_typical: {
                String: string,
                Valid: string
            },
            brightness_hbm: {
                String: string,
                Valid: string
            },
            protection: string
        },
        memory: MemorySpec[],
        sound: {
            loudspeaker: string,
            features: string
        },
        features: {
            sensors: string
        },
        colors_tr: string[],
        models: string[],
        cameras: Cameras
        
    }


interface Lens {
  type?: string;
  megapixels?: string;
  aperture?: string;
  focal_length?: string;
  sensor_size?: string;
  pixel_size?: string;
  zoom?: string;
  other_features?: string[];
}

interface CameraFeature {
  spec: string;
}

interface CameraVideo {
  video: string;
}

interface CameraSpec {
  lenses: Lens[];
  features: CameraFeature[];
  video: CameraVideo[];
}

interface Cameras {
  mainCamera: CameraSpec;
  selfieCamera: CameraSpec;
}
interface MemorySpec {
    storege:string,
    ram:string
}
export interface ProductDetailResponse{
    message: string,
    Product: ProductDetail,
}
export interface UpdateProductRequest{
    id : number,
    name: string,
    image_url: string,
    brand_id: number,
    category_id: number,
}
export interface UpdateProductResponse{
    message: string,
    data?: Product
}
export interface CreateReviewRequest{
    product_id : number,
    content : string,
    rating: number
}
export interface UpdateReviewStatusRequest{
    id: number,
    status: number 
}
export interface ReviewsListResponse{
    message : string,
    Reviews? : Review[],
}
export interface ReviewDetailResponse{
    message: string,
    Review? : Review[]
}
export interface UpdateReviewRequest{
    id : number,
    product_id: number,
    content: string,
    rating: number
}
export interface LoginRequest{
    email : string,
    password : string,
}
export interface UserProfileResponse{
    message: string,
    user?: {
        id: number,
        email: string,
        phone: string,
        name: string,
        surname: string,
        gender: number,
    }
}
export interface RegisterRequest{
    name : string,
    surname: string,
    email: string,
    phone: string,
    password: string,
    gender: number,
}
export interface RegisterResponse{
    message : string,
    data : RegisterRequest,
}
export interface UpdateUserRequest{
    email : string,
    name : string,
    surname : string,
    phone: string,
    gender: number,
}

export interface UpdateUserResponse{
    message : string,
    user?:{
        email: string,
        id : number,
        name: string,
        phone: string,
        surname: string,
    }
}