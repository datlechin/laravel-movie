<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        $movies = [
            [
                "adult" => false,
                "backdrop_path" => "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
                "genre_ids" => [
                    28,
                    12,
                    878
                ],
                "id" => 634649,
                "original_language" => "en",
                "original_title" => "Spider-Man: No Way Home",
                "overview" => "Peter Parker đã bị lộ mặt và không còn có thể tách biệt cuộc sống bình thường của mình với những yêu cầu cao của việc trở thành một Siêu anh hùng. Khi anh ta yêu cầu sự giúp đỡ từ Doctor Strange, mọi thứ càng trở nên nguy hiểm hơn, buộc anh ta phải khám phá ra ý nghĩa thực sự của việc trở thành Người Nhện.",
                "popularity" => 8408.901,
                "poster_path" => "/j5f5bRlpChRuyHdexmeSnQmklDt.jpg",
                "release_date" => "2021-12-15",
                "title" => "Người Nhện: Không Còn Nhà",
                "video" => false,
                "vote_average" => 8.2,
                "vote_count" => 11655
            ],
            [
                "adult" => false,
                "backdrop_path" => null,
                "genre_ids" => [
                    878,
                    28
                ],
                "id" => 919689,
                "original_language" => "en",
                "original_title" => "War of the Worlds: Annihilation",
                "overview" => "",
                "popularity" => 7079.359,
                "poster_path" => null,
                "release_date" => "2021-12-22",
                "title" => "War of the Worlds: Annihilation",
                "video" => false,
                "vote_average" => 7.1,
                "vote_count" => 16
            ],
            [
                "adult" => false,
                "backdrop_path" => "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
                "genre_ids" => [
                    28,
                    878,
                    35,
                    10751
                ],
                "id" => 675353,
                "original_language" => "en",
                "original_title" => "Sonic the Hedgehog 2",
                "overview" => "",
                "popularity" => 6050.744,
                "poster_path" => "/dhICSaFjCE6DaTacJxpjkw57g76.jpg",
                "release_date" => "2022-03-30",
                "title" => "Sonic the Hedgehog 2",
                "video" => false,
                "vote_average" => 7.7,
                "vote_count" => 521
            ],
            [
                "adult" => false,
                "backdrop_path" => "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
                "genre_ids" => [
                    16,
                    10751,
                    35,
                    14
                ],
                "id" => 508947,
                "original_language" => "en",
                "original_title" => "Turning Red",
                "overview" => "Mei, mười ba tuổi đang trải qua cảm giác khó xử khi là một thiếu niên với sự thay đổi - khi quá phấn khích, cô ấy đã biến thành một con gấu trúc đỏ khổng lồ.",
                "popularity" => 6268.757,
                "poster_path" => "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
                "release_date" => "2022-03-10",
                "title" => "Gấu Đỏ Biến Hình",
                "video" => false,
                "vote_average" => 7.5,
                "vote_count" => 1705
            ],
            [
                "adult" => false,
                "backdrop_path" => "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
                "genre_ids" => [
                    28,
                    12,
                    878
                ],
                "id" => 406759,
                "original_language" => "en",
                "original_title" => "Moonfall",
                "overview" => "Năm 2011, một tai nạn ngoài vũ trụ khiến một phi hành gia tử vong đầy bí ẩn. Đúng 10 năm sau, Mặt Trăng đột nhiên rời khỏi quỹ đạo và dần trên đường va chạm với Trái Đất. Chuyện dường như có liên quan tới tai nạn năm xưa, và chỉ có những đồng đội của phi hành gia xấu số kia mới có thể tìm ra chân tướng sự việc, cũng như bản chất của Mặt Trăng sau hàng tỷ năm bị giấu kín.",
                "popularity" => 5811.989,
                "poster_path" => "/kF9QSKdYaSSbtwAEC7NMbktko8y.jpg",
                "release_date" => "2022-02-03",
                "title" => "Trăng Rơi",
                "video" => false,
                "vote_average" => 6.5,
                "vote_count" => 697
            ],
            [
                "adult" => false,
                "backdrop_path" => "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
                "genre_ids" => [
                    80,
                    9648,
                    53
                ],
                "id" => 414906,
                "original_language" => "en",
                "original_title" => "The Batman",
                "overview" => "Tay giết người hàng loạt – The Ridder (Paul Dano) sẽ là kẻ thù nguy hiểm hàng đầu của Batman ở phần phim sắp tới. Tên xấu xa này bị cảnh sát James Gordon và đồng đội bắt giữ đã lâu. Thế nhưng, hóa ra việc nhốt gã sau song sắt chỉ khiến The Ridder phiền phức hơn với Đấng. Penguin (Colin Farrell) thể hiện là kẻ thủ ác thích trực tiếp tạo ra hỗn loạn, muốn đối đầu Batman hơn là chỉ đạo gián tiếp theo cách The Ridder thực hiện.",
                "popularity" => 3309.044,
                "poster_path" => "/nMp4tu8XuVG3CSWdXTFiHLdngnc.jpg",
                "release_date" => "2022-03-01",
                "title" => "Người Dơi: Vạch Trần Sự Thật",
                "video" => false,
                "vote_average" => 7.9,
                "vote_count" => 2924
            ],
            [
                "adult" => false,
                "backdrop_path" => "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
                "genre_ids" => [
                    16,
                    35,
                    10751,
                    14
                ],
                "id" => 568124,
                "original_language" => "en",
                "original_title" => "Encanto",
                "overview" => "Câu chuyện về một gia đình phi thường, nhà Madrigals, sống ẩn mình trong vùng núi Colombia, trong một ngôi nhà ma thuật, trong một thị trấn sôi động, ở một nơi kỳ diệu, quyến rũ được gọi là Encanto. Phép thuật của Encanto đã ban phước cho mọi đứa trẻ trong gia đình món quà độc nhất vô nhị từ siêu sức mạnh đến sức mạnh chữa lành — mọi đứa trẻ, trừ Mirabel. Nhưng khi cô phát hiện ra rằng phép thuật xung quanh Encanto đang gặp nguy hiểm, Mirabel quyết định rằng cô, người nhà Madrigal bình thường duy nhất, có thể là hy vọng cuối cùng của gia đình cô.",
                "popularity" => 2644.562,
                "poster_path" => "/wWL205mZBcOP4GNtdhztAvqTgUG.jpg",
                "release_date" => "2021-11-24",
                "title" => "Encanto: Vùng Đất Thần Kỳ",
                "video" => false,
                "vote_average" => 7.7,
                "vote_count" => 6062
            ],
            [
                "adult" => false,
                "backdrop_path" => "/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
                "genre_ids" => [
                    28,
                    12,
                    35,
                    878
                ],
                "id" => 696806,
                "original_language" => "en",
                "original_title" => "The Adam Project",
                "overview" => "Sau khi gặp tai nạn rơi máy bay vào năm 2022, phi công chiến cơ du hành thời gian Adam Reed bắt tay với chính mình lúc 12 tuổi trong nhiệm vụ cứu tương lai.",
                "popularity" => 2865.605,
                "poster_path" => "/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
                "release_date" => "2022-03-11",
                "title" => "Dự Án Adam",
                "video" => false,
                "vote_average" => 7,
                "vote_count" => 1797
            ],
            [
                "adult" => false,
                "backdrop_path" => "/iDeWAGnmloZ5Oz3bocDp4rSbUXd.jpg",
                "genre_ids" => [
                    28,
                    53
                ],
                "id" => 823625,
                "original_language" => "en",
                "original_title" => "Blacklight",
                "overview" => "Travis Block là một đặc vụ bóng tối của Chính phủ, người chuyên loại bỏ các đặc vụ có vỏ bọc bị lộ. Sau đó, anh ta phải khám phá ra một âm mưu chết người trong hàng ngũ của chính mình, những người đạt đến các cấp cao nhất của quyền lực.",
                "popularity" => 2687.925,
                "poster_path" => "/rqpJhwwBYOO854N0L875RQhwW9M.jpg",
                "release_date" => "2022-02-10",
                "title" => "Phi Vụ Đen",
                "video" => false,
                "vote_average" => 6,
                "vote_count" => 282
            ],
            [
                "adult" => false,
                "backdrop_path" => "/t7I942V5U1Ggn6OevN75u3sNYH9.jpg",
                "genre_ids" => [
                    28,
                    53
                ],
                "id" => 760868,
                "original_language" => "sv",
                "original_title" => "Svart krabba",
                "overview" => "Để chấm dứt cuộc chiến hậu tận thế và cứu con gái, viên lính nọ bất đắc dĩ bước vào nhiệm vụ liều lĩnh: mang thùng hàng tối mật vượt qua vùng biển đóng băng.",
                "popularity" => 2660.508,
                "poster_path" => "/3WBcQlVTeoLelZghABwmhe4b9C5.jpg",
                "release_date" => "2022-03-18",
                "title" => "Chiến Dịch Cua Đen",
                "video" => false,
                "vote_average" => 6.3,
                "vote_count" => 331
            ],
            [
                "adult" => false,
                "backdrop_path" => "/4840rkbpsiuow5ew155oVKcqJwj.jpg",
                "genre_ids" => [
                    18
                ],
                "id" => 615,
                "original_language" => "en",
                "original_title" => "The Passion of the Christ",
                "overview" => "",
                "popularity" => 2254.519,
                "poster_path" => "/2C9vyK6leWDb2ds65R7uIwSmh8V.jpg",
                "release_date" => "2004-02-25",
                "title" => "The Passion of the Christ",
                "video" => false,
                "vote_average" => 7.4,
                "vote_count" => 3401
            ],
            [
                "adult" => false,
                "backdrop_path" => "/85xYejKh6JPTEUGrn2SIPCxxiQO.jpg",
                "genre_ids" => [
                    14,
                    12
                ],
                "id" => 338953,
                "original_language" => "en",
                "original_title" => "Fantastic Beasts: The Secrets of Dumbledore",
                "overview" => "",
                "popularity" => 2230.195,
                "poster_path" => "/r4kpiUGito9uM1YmPfM1i6TdFgQ.jpg",
                "release_date" => "2022-04-07",
                "title" => "Sinh Vật Huyền Bí: Những Bí Mật của Dumbledore",
                "video" => false,
                "vote_average" => 7,
                "vote_count" => 378
            ],
            [
                "adult" => false,
                "backdrop_path" => "/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
                "genre_ids" => [
                    12,
                    16,
                    35,
                    10751,
                    14
                ],
                "id" => 676705,
                "original_language" => "fr",
                "original_title" => "Pil",
                "overview" => "",
                "popularity" => 2264.227,
                "poster_path" => "/78JfwRiubwX87BYgPXsdFKBf9P5.jpg",
                "release_date" => "2021-08-11",
                "title" => "Pil",
                "video" => false,
                "vote_average" => 6.9,
                "vote_count" => 60
            ],
            [
                "adult" => false,
                "backdrop_path" => "/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
                "genre_ids" => [
                    27
                ],
                "id" => 661791,
                "original_language" => "es",
                "original_title" => "La abuela",
                "overview" => "",
                "popularity" => 2253.793,
                "poster_path" => "/19rA9FjhwI4VEfaCXV7648XUInR.jpg",
                "release_date" => "2022-01-28",
                "title" => "La abuela",
                "video" => false,
                "vote_average" => 6,
                "vote_count" => 101
            ],
            [
                "adult" => false,
                "backdrop_path" => "/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg",
                "genre_ids" => [
                    27,
                    53
                ],
                "id" => 833425,
                "original_language" => "en",
                "original_title" => "No Exit",
                "overview" => "",
                "popularity" => 2267.714,
                "poster_path" => "/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
                "release_date" => "2022-02-25",
                "title" => "Không Lối Thoát",
                "video" => false,
                "vote_average" => 6.6,
                "vote_count" => 358
            ],
            [
                "adult" => false,
                "backdrop_path" => "/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
                "genre_ids" => [
                    53,
                    28
                ],
                "id" => 760926,
                "original_language" => "en",
                "original_title" => "Gold",
                "overview" => "",
                "popularity" => 2195.642,
                "poster_path" => "/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
                "release_date" => "2022-01-13",
                "title" => "Vàng",
                "video" => false,
                "vote_average" => 6.5,
                "vote_count" => 186
            ],
            [
                "adult" => false,
                "backdrop_path" => "/gnWFYFTTUC62NHSGcMuo4JGK0t4.jpg",
                "genre_ids" => [
                    28,
                    878,
                    35,
                    10751
                ],
                "id" => 454626,
                "original_language" => "en",
                "original_title" => "Sonic the Hedgehog",
                "overview" => "Bộ phim live-action về chuyến phiêu lưu đầy mạo hiểm, gay cấn cũng không kém phần vui nhộn của chú nhím Sonic nổi tiếng tại Trái Đất.",
                "popularity" => 1861.392,
                "poster_path" => "/dKAJflT91VPdA1clReJ6SzI3E3C.jpg",
                "release_date" => "2020-02-12",
                "title" => "Nhím Sonic",
                "video" => false,
                "vote_average" => 7.4,
                "vote_count" => 7783
            ],
            [
                "adult" => false,
                "backdrop_path" => "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
                "genre_ids" => [
                    16,
                    35,
                    12,
                    10751
                ],
                "id" => 774825,
                "original_language" => "en",
                "original_title" => "The Ice Age Adventures of Buck Wild",
                "overview" => "Anh em nhà Possum Crash và Eddie bắt đầu tìm một nơi ở cho riêng mình, nhưng lại thấy mình bị mắc kẹt trong Thế giới đã mất. Họ được chồn Buck Wild giải cứu, và cùng nhau bắt tay vào sứ mệnh giải cứu Thế giới đã mất khỏi sự thống trị của loài khủng long.",
                "popularity" => 1925.131,
                "poster_path" => "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
                "release_date" => "2022-01-28",
                "title" => "Kỷ Băng Hà: Cuộc Phiêu Lưu Của Buck Wild",
                "video" => false,
                "vote_average" => 6.9,
                "vote_count" => 999
            ],
            [
                "adult" => false,
                "backdrop_path" => "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
                "genre_ids" => [
                    16,
                    10751,
                    14,
                    35,
                    12
                ],
                "id" => 585083,
                "original_language" => "en",
                "original_title" => "Hotel Transylvania: Transformania",
                "overview" => "",
                "popularity" => 1843.853,
                "poster_path" => "/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg",
                "release_date" => "2022-02-25",
                "title" => "Khách Sạn Huyền Bí 4: Ma Cà Rồng Biến Hình",
                "video" => false,
                "vote_average" => 7.1,
                "vote_count" => 696
            ],
            [
                "adult" => false,
                "backdrop_path" => "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
                "genre_ids" => [
                    878,
                    28
                ],
                "id" => 524434,
                "original_language" => "en",
                "original_title" => "Eternals",
                "overview" => "Chủng Tộc Bất Tử (The Eternals) là một nhóm gồm những người ngoài hành tinh cổ đại đã sống bí mật trên Trái đất trong hàng nghìn năm. Khi một bi kịch bất ngờ ập đến buộc họ phải thoát ra khỏi bóng tối, họ buộc phải đoàn tụ chống lại kẻ thù truyền kiếp nhất của nhân loại, Deviants.",
                "popularity" => 1730.99,
                "poster_path" => "/KaJkRufSS3H3WQ07eQv3WxXaZN.jpg",
                "release_date" => "2021-11-03",
                "title" => "Chủng Tộc Bất Tử",
                "video" => false,
                "vote_average" => 7.1,
                "vote_count" => 5270
            ]
        ];

        return inertia('Home', [
            'filters' => request()->only(['genres', 'countries', 'years']),
            'movies' => $movies,
        ]);
    }
}
