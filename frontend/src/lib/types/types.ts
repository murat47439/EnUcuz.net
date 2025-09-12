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

    id: number,
    name: string,
    brand: {
      id: number,
      name: string
    },
    battery: {
      type: string,
      charging: string[]
    },
    platform: {
      os: string,
      chipset: string,
      cpu: string,
      gpu: string
    },
    network: {
      technology: string,
      speed: string,
      "2g": string,
      "3g": string,
      "4g": string,
      "5g": string
    },
    display: {
      type: string,
      size: string,
      resolution: string,
      protection: string
    },
    launch: {
      announced: string | null ,
      released: string | null,
      status: string
    },
    body: {
      dimensions: string,
      weight: string,
      build: string,
      sim: string
    },
    memory: {
      cardSlot: string,
      internal: string
    },
    sound: {
      loudspeaker: string
    },
    comms: {
      wlan: string,
      bluetooth: string,
      positioning: string,
      nfc: string,
      radio: string,
      usb: string
    },
    features: {
      sensors: string
    },
    colors: string[],
    models: string[],
    cameras: {
      mainCamera: {
        type: string,
        cameraSpecs: string[],
        features: string[],
        video: string[]
      },
      selfieCamera: {
        type: string,
        cameraSpecs: string[],
        features: string[],
        video: string[]
      }
    
  }
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