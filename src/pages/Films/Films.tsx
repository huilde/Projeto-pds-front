import { Card, Image, Input, List, Pagination, Typography } from "antd"
import { useEffect, useState } from "react"
import { ApiService } from "../../services/ApiService"
import { StyledFilms } from "../Films/Films.style"

type Film = {
    id: number
    overview: string
    poster_path: string
    release_date: string
    title: string
    vote_average: number
    backdrop_path: string,
    genres: Array<{
        id: number
        name: string
    }>
}

const COUNT_FILMS = 500 * 20

const Films = () => {
    const [films, setFilms] = useState<Film[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)

    const api = ApiService()

    const handleGetFilms = async () => {
        setLoading(true)

        try {
            const response = await api.get(`/films/${page}`)

            setFilms(response.data.films)
        } catch (error) {
            
        }

        setLoading(false)
    }

    useEffect(() => {
        handleGetFilms()
    }, [page])

    return (
        <StyledFilms>
            <div>
                <Typography.Title
                    style={{
                        textAlign: "center",
                        color: "black"
                    }}
                >
                    Filmes
                </Typography.Title>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 32
                    }}
                >
                    <Input.Search
                        style={{
                            maxWidth: 500,
                            display: "flex"
                        }}
                        onSearch={(value) => {
                            console.log(value)
                        }}
                    >
                    </Input.Search>
                </div>

                <List
                    loading={loading}
                    dataSource={films}
                    grid={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 5
                    }}
                    renderItem={(item: Film) => {
                        return (
                            <Card
                                key={item.id}
                                style={{
                                    margin: 12,
                                    marginBottom: 32
                                }}
                            >
                                <Image
                                    style={{
                                        borderRadius: 8,
                                        height: "500px"
                                    }}
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                ></Image>
                            </Card>
                        )
                    }}
                >

                </List>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "16px",
                        marginBottom: "24px"
                    }}
                >
                    <Pagination defaultCurrent={1} current={page} total={COUNT_FILMS}  defaultPageSize={20} onChange={(page) => setPage(page)}/>
                </div>
            </div>
        </StyledFilms>
    )
}

export default Films