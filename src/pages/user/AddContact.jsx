import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContactAction } from '../../redux/actions/userAction'
export default function AddContact() {
    const { login } = useSelector(state => state.allUsers)
    const actionDispatch = useDispatch()
    const intialValue = {
        name: "Ross",
        mobile: 98989889,
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAiwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHCAD/xABAEAACAQMCAwYEBAMGBAcAAAABAgMABBEFIQYSMRMiQVFhcQcUgZEjMkLBFaGxFlJistHhM3Lw8QgkJTVEdJL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgQDAAUG/8QAIhEAAwACAgMAAwEBAAAAAAAAAAECAxEhMQQSQSIyURMF/9oADAMBAAIRAxEAPwDZguK9ijUXNP0KepOcMYWEeOYjalRvQ4oNbWgrsh49M8ZGyfGncVlFH0T70TX9YseH9Lm1HUnKQR+CjLOx6Ko8SfKsi1f4kcYydtqWmafbadpyDs1+aTnaQ+GD0JGfDb3qefGxw96Nqz3X02kR42xijIFIJVgcdcHpXLN9x/xXqUBgutVlnh37pRBnJ8cKM7eBqJstf1Swk57O+ntWwVzC3Jt5HGK2WkZPbOvseFFNctLx9xZHg/x+6QeBwpP1OMn61YuHfjBxBYzoNZ5NTts7vyKkij0IAB+o+tN7AaN8urmK1UPO3KhIHNjIG+N/KlSKpCfEvhPUrRoob3lndOVY57Z2yTtjBHe38Kb6dxBDonE1rp0mqtLpd/EFhS5lVjbyjp3uvI2G2OwYYHXAOzi+sgNJ9kKWypGQQR4YNARR2DQl2YoeUUegxXA0ExivUavVxwZpaBXy2OtNA5Y4XenUKFd26npUOLJWV8dGrSQv0HWofXOI7PSLSeduaQQKWfkGcCm2t6o3Mbe3flA/O4/pWe8d6othoVwjKX7YiMnmxsfAbHfby2qir50inH4y9HksqvxL49biSe2itcC3tizKD0Zjtze+PtmqGkjFu0UZO43bJ+9A65OaU5RJjkOHHiNs0SVvYCgg9pGUPmpoUQPIQyggjY+Rp1aWVzO4WKIs3oM/tU9DwfqRhEnZdR09KDpIacdPpFa7NRsw7vhnz8s0kgKhgm5/UvjVy/sfdlOZVIIOSCNjTG94WuoIpmVSOUgqRQ95C8VL4V6N3Ldw4fHNmvPL2rFst2rEFuZs5x0OTSr2klrIQVOSBnIpsqfjOTnHNt6Uxm+DSfhnxxHoS/JaheTC3GHj7TmZQmN09MYyD64NbhpuqWep26z6fdwXcJ6SQyBxn3FcradcRWt9byzxGaBZB2iBuUsniM+1bToV1pLQ6RxDaK6zXM8drdjs8Bw3dRttsoeX1wTnwpkzjTKK1HbyxTO6uo4FyxyfAUMmWYW2wxLp6QsXAGTTc39spwZRkeVQ91dyzsQxwngopvv415WT/ptPUIujwlr82WuKFYxgCkNTuOwtiFPfbZadk4GScDxqDvZO3mZvAbCvWUqVqUS4Y962yK7PJOep8ayD4qam8+rQafEfwrRTzb/mlbBbb02H1I862sRNhmCkgb7Cud+K7kXeuX86Q9ijTscMRnHmfU9T748KDnRV5OTc+pFwxNIAmCzu2ABVy0LgsOqyXpzn9IG/3qJ4TiEt/CCByjoTWrWqBVwox61jlprgy8fGq5YGmaZaWUSpBAqgeON6lVjXG2B6YpKEY8KW5h5ipXyXJJLgBo1K9RTWWCNgeZA2euVzTok+IH0pNzXHdlU13hy2uo3ZByORtjxrN9T0qazk5HVsZ6461s0+4NQepWUU6ZkQEHzrbHka7J82GWtoyQ7qV2Zsg+mOn71K6Bq8umXBjjnkjtpNpgjcuPAP7rsc4ztSWs2AtbyRV5sHcHrv5VGROEmUyYMbbNtkgeJA86pRA1pnT9rrVxzyWcsiTug50uV2EqHBVseoI+oNEkYyNzOSSarHwXt4LuyvCTK62ojt0Ev91sv9+8BkY2ArRH0y2bopX2NQeT4mXNW0+CzBnx41yuSvUFTT6PH+mVh703Oktn/jD7VBXgZ18Kl5WJ/ScYBlIPQ0jHZwp+nPvS1GFfRnkJtCcyILeXYKOQ746bVyLqIK3ksZIdldudwBuc7+JzvXXrosiNG4yrDlI9DXIuq7avf+fzMn+c0lARYODoQ12p3J61psGyZyB5VRuC4BaaU99NuX3HtTv5jV9VkzasIYR+VjtU1rbLsT9JLujE+dOI1YgEZqhQw8RWtwCZ8qP1o2cirJpeo3Csy3Pf5umeorKpS+lM37fCaKk0hMpH2p1NOiRdpykDFVzU9emiyYIFfApUtjb0Pn3FR9+QI2PlUGOLZy5Etg4UZ5mVTgUtDrNvqcTohKyAbqRjNOoaMayS+Ck61L2lxJnGQKr0hySoHd9fD1qX4kj7DUXU9Oqmojm5MkEhgcbVUujz67Nw+AM6pb6xauzdp2kDrztnKGPu9D5D7D021ltqqHww0WHTuFNOuXVfmrm0jaQjbA3ZRj/CHxVvYZGK1SE2JO1I89HdDSZQ0R0kPaEUFDXCAMAylTnBGDiuSuJrR7LiHVrQkOYryVOYeOHNdbA1zRxjZxXPGd1dRvzxXczygFcFd8b0ltDSmyx2FiDo9jbuAF7NWcEddqT1KW7j/AsUwQuf8ACPfz9qnoIVIVSowFApwlmpHKMqOm1RVXJ6UzwU3Rk1e6lY30rQoqllYxg5bOw7u/TNT1s90OxM6Hc75G9T3ywEYVncgfpwAKQnH5VJzv9qWmn8GiXP0X1JyumevLtVOa7ljgZkjTtOQuFc9QP39N6tuokNaKM7ZxTCzTniVcAhdmBH86C4DRVLXiKeVmiktGUKpLFBsAPMYH8qG4iS+jF1bhRIoyrL0NXS5sQyAoITtjIzUWdNijLGJQpzlguwrT2W+DL0euTPuNI8i1uQPz5QioPSrT+IahZ2nX5iZY38wCcE/berxxnah9KJHVJAQfLY1WeBlh/tVZPcSxxLE/OryuqJzDoCSfH/rPSqoaetkOVao1+K1ntokit5pY441Cqoc4AHSp7QtL1S4dZpbyeOAHOCx7/wDtU7Z6ZaRrHLPu+ASrEYBp+bq3XAV0wOgBq/JnlrUomma3yKkUHIKQnu4oojIWB8gD1qEkvJnctzlc+A8K8zyPKjC9Psrw4KyLaLHQigzQ1SYANsjexrEtd03mUzKiloZwc+YJrbqzHW1S2lubaPI5ZmA5h/irDNxplXj6c0htbOQwz4ipeLZRtvUHC3eXf0qatJFIHN4b1LfZdj6FmyFPL1PU1EyyL22x5sNuaezu91KUVikabnFQl7cT2tz2KQh4y2ebmG308TS6HZKXqk2v5Tj2pho7lp2AGfMelFbiKFbdopGACDfPh6VH8OamLu/R4o3EeW5mYYGMf64pkuBaaLTLEQpxuKZzFUQ92pMTRsCNgajdQZcEAilG1wUniaUPZSr+ksDUBw9pcvzsOR3XIGQNwdjVq1KFJswyDmUncGpHhu07BoLkBZBIzonqR/2NUN6WkSRCq22XiTUXuY07+cKASD44pAyHwNNLGwjs1bkJZ2/OaC8v7WzGbiZV9PGqVsivW3oko71kADAMPI0uNQH91PtVV/tLppOO0b35acrrGnMAfmo9/M4ovH/UDZpQ60NBXgaIoaqDxjF/6pcqoyXVW6en+1XzxqL1nQbbV2R5ZZ4ZFUrzREd4eRyDWeWXU8GuG1NfkZgkxU4wPSl3vzDAZAQTsB4DJOBTa+geyvprWUDnhco2/XB6/XrQwxrcQNExBOzDw6VLS55LYvgVtr49CxeTqWxilDyzygOpYDyqN1KxmhAfT5FideqsvMpHt50705ZZSq/PcspA6wjGfGgl/DTb0J3VrDNJJ2gjcLvmRQT96RtmEBA2AGTsdqmJ7W7WKUC5s+Vcb8hydvLNVW/W9Ehhtmt2JYjnaNv9aPYEv4ST3zhi8chDjfHUH0pS5u3eCOblIEmMD3ptpOmmRwLgmWQ9W6AD0FOdTeNbq3t4gpCDJAHTFDhsDprsi71iHw2clT9DVl4XhEMXYhCEhQFebfvN1/69arRSa+1FUtY+05e8VBH5QRn9quumRPFb/jJySMxJXyHhW0L8lsnt6hgasb4xctio3HeOd6qVxZ3POWuEfm8S29XrO1FIDfmGfcVXF+pG0UA2u2KD5X0q7y6fay7tEM+Y2pD+D2nk33rZZZEc0abXqChqcc9RhRKMK44y34lQC317tIhjtoFdvfcftUBaXfIwxk+lWn4nJzatCR1Fuv8AmaqRbsp5gV74ODvU1rbKo4SLTKRLHzAd7HlTaJ1gYFrViQeqHGaJplxk8udwemalCEZuU4IO+w8Kwa0yuLeuBlPewvzfgyHPQc4qObmmY/hdlH4j9RqwzWUKJzCEZAznFR03Lz5OMZ226Vw7p67EWuBY2nb53I2WqxcXbkNM7BpJj08af67cCV+zBGOuKgpX7adVjH5elazPBHVbZd+DLXlspLyQKWlJVCRvyj/fP2qwE71H8OKU0O2Vuo5s/wD6NPj1qmeiauw+dq9mgHSgHWmFD5r2aI2SpCnB86j2kuVYqScjyFZ3fr8HmfY0+vCvUNaGYFGFFpjr2rW+haLeapeH8G2jLkA4LHoFHqSQB71wSmfEUc2sxjBx8qp9+81UG/hkQ9tFny6eFWu3+e13hm21+9YvczM8rqOiRM3dUDyUYH86j5LdeVkZQR13HWpcn40VwvaCvWeomGcSDI2wc71YLLWI5OVs7g9OlQF7p5hkJwQPIeFNCl1GcwZYelDSaOVVJdZdZUIQfHbGahL7VViy5br0HnUC/wA+cNyn70QWdzcPzTNyjrjzopJBdtgTXb3ErSjYE7U/0i2APOw3Jz7UjHacxSMDugVM20BVOUD3Fc2CZ5LTobBtJi9C2fTvGnZ61X9UvJeGNH0y/kRnt5Zit0g/Sj55WHty/XNTyOsqLJGwZGAZWHiD0Nby+Cav2YqNxQivL0o2KcULjFeoSK9iuOL8BQ16q5xZxvofCsRGoXPPdYylpD3pG+n6R6nFcAnLu4gs7aW6upUhghUvJI5wqqOpJrnz4lcfycVTfJ2AeHSYXyik7zsOjsPD0H336R/GvxA1bi4iGbltNPV+ZbSIkhiOhc/qP8hVSzShOifhoyz8IaUNiBbhCPPGx/pS+vcLPGGn09S8Y3MOO8nt5iqt8EtUWbR7jTnf8W1mLKpPVH3/AM2f5VrkD5QU9wrkM5HD4MhmhVxhx7jHSmq2yo5BXPtWpa3w5bajzTW+Le6PUgd1/cfvVEvbG4sbowXcRWQDx3yPMGobioZbFzaI826NFnl6HxFMLlVxyoCcnb0qTnQqh5QR579aYiLC5zl89T1FJsf1G8UAB39/Y1aOFtCF/KZpl/8ALRnDt/fOPyj9z4UjwzoEuqyFiGW0U4kl/Yev9K0GOGK2tkht4xHEgwqiqMOJ09sxy5FC0uyi/FCEXHDV8OUAKgZQB05SCMVmfB3F8mkdnaXxeWxJxnqYfUeY9PtWp8ftnR7tD+uNh/I1z4G8qppaI1ydD208VxAk0EiyROMq6nII9KX2865/03WNQ0xw9heSw46oGyre6nY1bNO+I90mE1K1Rx4yQnlI+h/1pdjGp7V7aqhY8X6ffY7C5UOf0Sd1vsafnVTnqa7Z2iH40+MV5fq9pwzG9lbkYa6kH4zf8vgv8z7Vlc0jzStLK7O7nLM7Elj5knrRTXqU4Mu1Ca94UBrjiw8B67/AOJbW7d+W2c9lceXI3j9Dg/SunrN+ZBvmuPvP7V0l8JNb/jfCNuZGLXFmxtps9cqBg/VSP51pL40K0XodKbalYW2pW5huk5gN1YfmU+YNOQcDNU34h8Uaho9obPh6xnvNWmU4McRdbdf7x9fIffbqGtgTa6IzUeH54bmaKHE4Tf8AD3YA9OZfCh0Th031xy3DCKOPDPGGAkI9uoHrWGxcQ63KZoJtUvVSR2kmUSlS7ePMRufY00tNSvrTU47rTJ5YbxGHJLG3ez5eo9DtWH+Ub2U/73rR1tHBFbwJBAipGgwqqMAUjPstRXCWpalf6DZ3Ot28cN3Iu5jPdf1x4Z8ulSs24x0qyVpErKPx0M6e567H+lc9gkqCcdPCuk+J7b5iFowOqmua1/KvsKTKNIavUFGFZDAU4W9u0UKlzMqjoBIwx/Om5r1cceoR1r1AelccKUU0IoGrjgtaV8DNc+Q4mk0uZsQ6jH3R5Srkj7rzD7VmtS/CDMnFWjMjFT87FuDj9QorsDOodb1GWxtuWyi7a8k2iU/lX/E3kBSehaf8hEeeYz3Mx555mO7t/p5Urf8A5vrQxHdPat9cCHOXxL0hNF461SGHl7CYfMxgeAfcg/XP0xQfCvh/+O8SRc4/CiPO7eQH7+H1qQ+NJP8Abu63/wDiRf0NWL/w9Ac2pnG+E/rWK/YZ9GtsoRVjC8qgYXHgBQHOM9f3pW46n3pJa3FI+7h7RmIHQbeprld0MTtG3VGKn3BxXWcv/FX/AJ1rlTU//dL3/wCxJ/mNZ5WNI2ofYUAoRWQx7c16hoK44//Z"
    }
    const [contactData, setcontactData] = useState(intialValue)
    const handleAddContact = () => {
        console.log(contactData);
        actionDispatch(addContactAction({ ...contactData, userId: login.id }))
    }
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <label for="name" class="form-label">First name</label>
                            <input
                                type="text"
                                value={contactData.name}
                                onChange={e => setcontactData({ ...contactData, name: e.target.value })}
                                class="form-control"
                                id="name"
                                placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <label for="mobile" class="form-label">First mobile</label>
                            <input
                                type="text"
                                value={contactData.mobile}
                                onChange={e => setcontactData({ ...contactData, mobile: e.target.value })}
                                class="form-control"
                                id="mobile"
                                placeholder="Enter  Mobile" />
                        </div>
                        <div>
                            <label for="image" class="form-label">First image</label>
                            <input
                                type="text"
                                value={contactData.image}
                                onChange={e => setcontactData({ ...contactData, image: e.target.value })}
                                class="form-control"
                                id="image"
                                placeholder="Enter  Mobile" />
                        </div>
                        <button
                            onClick={handleAddContact}
                            type="button"
                            class="btn btn-primary w-100 btn-lg">Add Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

