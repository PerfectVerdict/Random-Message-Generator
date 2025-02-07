import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

const messages = [
    "Let not your heart be troubled: ye believe in God, believe also in me. – John 14:1",
    "I am the way, the truth, and the life: no man cometh unto the Father, but by me. – John 14:6",
    "Ye are the light of the world. A city that is set on a hill cannot be hid. – Matthew 5:14",
    "Blessed are the poor in spirit: for theirs is the kingdom of heaven. – Matthew 5:3",
    "Blessed are they that mourn: for they shall be comforted. – Matthew 5:4",
    "Blessed are the meek: for they shall inherit the earth. – Matthew 5:5",
    "Blessed are they which do hunger and thirst after righteousness: for they shall be filled. – Matthew 5:6",
    "Blessed are the merciful: for they shall obtain mercy. – Matthew 5:7",
    "Blessed are the pure in heart: for they shall see God. – Matthew 5:8",
    "Blessed are the peacemakers: for they shall be called the children of God. – Matthew 5:9",
    "Blessed are they which are persecuted for righteousness' sake: for theirs is the kingdom of heaven. – Matthew 5:10",
    "Rejoice and be exceeding glad, for great is your reward in heaven: for so persecuted they the prophets which were before you. – Matthew 5:12",
    "Ye have heard that it hath been said, An eye for an eye, and a tooth for a tooth: but I say unto you, That ye resist not evil: but whosoever shall smite thee on thy right cheek, turn to him the other also. – Matthew 5:38-39",
    "Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you. – Matthew 5:44",
    "That ye may be the children of your Father which is in heaven: for he maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust. – Matthew 5:45",
    "Be ye therefore perfect, even as your Father which is in heaven is perfect. – Matthew 5:48",
    "Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment? – Matthew 6:25",
    "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you. – Matthew 6:33",
    "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you. – Matthew 7:7",
    "Do unto others as you would have them do unto you. – Matthew 7:12",
    "Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat. – Matthew 7:13",
    "Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven. – Matthew 7:21",
    "Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you. – Matthew 5:43-44",
    "I am the good shepherd: the good shepherd giveth his life for the sheep. – John 10:11",
    "No man can come to me, except the Father which hath sent me draw him: and I will raise him up at the last day. – John 6:44",
    "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live. – John 11:25",
    "If ye love me, keep my commandments. – John 14:15",
    "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. – John 14:27",
    "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing. – John 15:5",
    "Greater love hath no man than this, that a man lay down his life for his friends. – John 15:13",
    "I am the Alpha and the Omega, the beginning and the end, the first and the last. – Revelation 22:13",
    "Verily, verily, I say unto you, He that believeth on me hath everlasting life. – John 6:47",
    "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. – John 3:16",
    "And ye shall know the truth, and the truth shall make you free. – John 8:32",
    "Father, forgive them; for they know not what they do. – Luke 23:34",
    "It is finished. – John 19:30",
    "And Jesus said, Father, forgive them; for they know not what they do. – Luke 23:34",
    "My God, my God, why hast thou forsaken me? – Matthew 27:46",
    "Come unto me, all ye that labour and are heavy laden, and I will give you rest. – Matthew 11:28",
    "I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst. – John 6:35",
    "For whosoever shall call upon the name of the Lord shall be saved. – Romans 10:13",
    "Jesus said unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me. – John 14:6",
    "Blessed are the poor in spirit: for theirs is the kingdom of heaven. – Matthew 5:3",
    "Ye are the light of the world. A city that is set on a hill cannot be hid. – Matthew 5:14",
    "I am the good shepherd: the good shepherd giveth his life for the sheep. – John 10:11",
    "And this is the will of him that sent me, that every one which seeth the Son, and believeth on him, may have everlasting life: and I will raise him up at the last day. – John 6:40",
    "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven. – Matthew 5:16",
    "Do not judge, or you too will be judged. – Matthew 7:1",
    "And he said unto them, Go ye into all the world, and preach the gospel to every creature. – Mark 16:15",
    "And Jesus said, Let her alone: why trouble ye her? she hath wrought a good work on me. – Mark 14:6",
    "Jesus answered, I am the way, the truth, and the life: no man cometh unto the Father, but by me. – John 14:6",
    "Then said Jesus, Father, forgive them; for they know not what they do. – Luke 23:34"
];

app.get("/message", (req, res) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    res.send(randomMessage)
    })

    app.listen(5000, () => {
        console.log("Server listening on 5000")
    }
)









