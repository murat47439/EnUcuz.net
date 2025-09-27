

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
    id?: number,
    name:string,
    description:string,
    stock:number,
    price: number,
    brand_name?: string,
    brand_id: number,
    seller_id?: number,
    seller_name?: string,
    seller_phone?: string,

    image_url: string,
    category_id: number,
    category_name?: string,
    status?: number,
    created_at?: { Time: string; Valid: boolean; };
    updated_at?: { Time: string; Valid: boolean; };
}
export interface Brand{
    id: number,
    name: string,
    deleted_at: string,
    created_at: string
}
export interface Brands{
    brands: Brand[]
}
export interface Chat{
    id: number,
    sender: number,
    recipient: number,
    channel_id: number,
    product_id: number
}
export interface Chats{
    chats: Chat[]
}
export interface ChatResponse{
    chat: Chat,
    message: string
}
export interface ChatMessage{
    id: number,
    chat_id: number,
    content: string,
    sender: number
}
export interface ChatMessages{
    messages: ChatMessage[]
}
export interface NewChat{
    chat: Chat,
    message: ChatMessage,
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
    brand?:number,
    category?:number,
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
Product: Product,
Attribute: Attribute[]

    }

export interface Attribute{
    id: number,
    attribute_id:number,
    attribute_name: string,
    product_id:number,
    value: string,
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
    password: string
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