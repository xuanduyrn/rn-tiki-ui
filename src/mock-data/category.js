export const productCategory = [
  {
    id: Math.random(),
    type: 1,
    title: 'Đồ chơi - Mẹ & Bé',
    desc: 'Vật dụng đồ dùng cho mẹ và bé giá tốt nhất » Tiki.vn',
    image: require('../../assets/images/category/1.jpg'),
  },
  {
    id: Math.random(),
    type: 2,
    title: 'Làm Đẹp - Sức Khỏe',
    desc: 'Làm đẹp - Sức khỏe - nhiều sản phẩm | Mua giá rẻ hơn tại Tiki.vn',
    image: require('../../assets/images/category/2.jpg'),
  },
  {
    id: Math.random(),
    type: 3,
    title: 'Điện Thoại - Máy Tính Bảng',
    desc:
      'Điện thoại, Máy tính bảng | Chính hãng, Giá rẻ hơn, Trả góp 0% tại Tiki.vn',
    image: require('../../assets/images/category/3.jpg'),
  },
  {
    id: Math.random(),
    type: 4,
    title: 'Thời Trang',
    desc: 'Mua Sắm Quần Áo, Thời Trang Hàng Hiệu Online » Tiki.vn: Thời Trang',
    image: require('../../assets/images/category/5.jpg'),
  },
  {
    id: Math.random(),
    type: 5,
    title: 'Điện Tử - Điện Lạnh',
    desc:
      'Điện Tử - Điện Lạnh: Tivi, Audio, Tủ lạnh, Máy giặt, Máy lạnh Tại Tiki',
    image: require('../../assets/images/category/6.png'),
  },
  {
    id: Math.random(),
    type: 6,
    title: 'Nhà Cửa - Đời Sống',
    desc: 'Nhà cửa đời sống » Mua đồ dùng gia đình Giá Rẻ tại Tiki.vn',
    image: require('../../assets/images/category/7.jpg'),
  },
  {
    id: Math.random(),
    type: 7,
    title: 'Hàng Quốc Tế',
    desc: 'Hàng Quốc Tế',
    image: require('../../assets/images/category/8.jpg'),
  },
  {
    id: Math.random(),
    type: 8,
    title: 'Bách Hóa Online',
    desc: 'Mua online các mặt hàng bách hóa giá tốt | Tiki.vn',
    image: require('../../assets/images/category/9.jpg'),
  },
  {
    id: Math.random(),
    type: 9,
    title: 'Thiết Bị - Phụ Kiện Số',
    desc: 'Mua online các mặt hàng Thiết Bị - Phụ Kiện Số giá tốt | Tiki.vn',
    image: require('../../assets/images/category/10.jpg'),
  },
  {
    id: Math.random(),
    type: 10,
    title: 'Voucher - Dịch vụ',
    desc: 'Mua online các mặt hàng Voucher - Dịch vụ giá tốt | Tiki.vn',
    image: require('../../assets/images/category/11.jpg'),
  },
  {
    id: Math.random(),
    type: 11,
    title: 'Ô tô - Xe máy',
    desc: 'Mua online các mặt hàng Ô tô - Xe máy giá tốt | Tiki.vn',
    image: require('../../assets/images/category/12.jpg'),
  },
  {
    id: Math.random(),
    type: 12,
    title: 'Nhà sách Tiki',
    desc: 'Mua online các mặt hàng Nhà sách Tiki giá tốt | Tiki.vn',
    image: require('../../assets/images/category/13.jpg'),
  },
  {
    id: Math.random(),
    type: 13,
    title: 'Laptop -Tivi - Máy vi tính',
    desc:
      'Mua online các mặt hàng Laptop -Tivi - Máy vi tính giá tốt | Tiki.vn',
    image: require('../../assets/images/category/14.png'),
  },
  {
    id: Math.random(),
    type: 14,
    title: 'Thể Thao - Dã ngoại',
    desc: 'Mua online các mặt hàng Thể Thao - Dã ngoại giá tốt | Tiki.vn',
    image: require('../../assets/images/category/15.png'),
  },
  {
    id: Math.random(),
    type: 15,
    title: 'Máy ảnh - Máy quay phim',
    desc: 'Máy ảnh - Máy quay phim giá tốt | Tiki.vn',
    image: require('../../assets/images/category/16.jpg'),
  },
];

export const product = [
  //Mẹ và bé
  {
    id: Math.random(),
    flashName: 'Vừa mới bán',
    progress: 10,
    typeOrder: 1,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type1/1.jpg'),
    title: 'Combo 2 Núm Ty Silicone Mềm Pigeon - L',
    shortDescription:
      'Combo 2 Núm Ty Silicone Mềm Pigeon sẽ giúp mẹ đỡ phải vất vả mỗi khi cho bé bú sữa, bé yêu cũng sẽ được bảo vệ an toàn, không lo bị đầy hơi hay sặc sữa',
  },
  {
    id: Math.random(),
    typeOrder: 1,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 90,
    image: require('../../assets/images/category/imgProduct/type1/2.jpg'),
    title: 'Xe ô tô điện trẻ em LT998',
    shortDescription: 'Đồ Chơi - Mẹ & Bé/Đồ chơi/Đồ chơi mô hình/Xe mô hình',
  },
  {
    id: Math.random(),
    typeOrder: 1,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Giảm giá',
    progress: 40,
    image: require('../../assets/images/category/imgProduct/type1/3.jpg'),
    title: 'CRM - Sữa Enfamil A + 1 360° Brain DHA+ MFGM PRO (400g)',
    shortDescription:
      'Sữa mẹ là thức ăn tốt nhất cho sức khỏe và sự phát triển toàn diện của trẻ sơ sinh và trẻ nhỏ CRM - Sữa Enfamil A + 1 360° Brain DHA+ MFGM PRO (400g)',
  },
  {
    id: Math.random(),
    typeOrder: 1,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Vừa mới bán',
    progress: 10,
    image: require('../../assets/images/category/imgProduct/type1/4.jpg'),
    title:
      'Khăn Giấy Ướt Không Mùi Kháng Khuẩn An Toàn Cho Bé Mamamy Mm0334 (100 Tờ) - Xanh',
    shortDescription:
      'Khăn Giấy Ướt Không Mùi Mamamy MM0334 (100 Tờ) - Xanh được làm từ vải dệt cao cấp, siêu mềm và không xơ,',
  },
  //làm đẹp sức khỏe
  {
    id: Math.random(),
    typeOrder: 2,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 85,
    image: require('../../assets/images/category/imgProduct/type2/1.jpg'),
    title:
      'Máy Rửa Mặt Và Mát Xa Da Mặt Halio Facial Cleansing & Massaging Device',
    shortDescription:
      'Máy Rửa Mặt Và Mát Xa Da Mặt Halio Facial Cleansing & Massaging Device giúp làm sạch sâu gấp 10 lần và loại bỏ tới 99% dầu thừa cũng như lớp trang điểm còn sót lại mà vẫn dịu nhẹ không gây lão hoá cho làn da.',
  },
  {
    id: Math.random(),
    typeOrder: 2,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 43,
    image: require('../../assets/images/category/imgProduct/type2/2.jpg'),
    title: 'Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml)',
    shortDescription:
      'Sữa Rửa Mặt Cetaphil Gentle Skin Cleaner (500ml) có công thức không xà phòng đã đạt được nhiều giải thưởng trong lĩnh vực làm đẹp và chăm sóc sức khỏe.',
  },
  {
    id: Math.random(),
    typeOrder: 2,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Giảm giá',
    progress: 13,
    image: require('../../assets/images/category/imgProduct/type2/3.jpg'),
    title: 'Bông tẩy trang IPEK 150 Miếng (Thổ Nhĩ Kì)',
    shortDescription:
      'Bông tẩy trang Ipek thành phần 100% bông cotton là bông tẩy trang hữu cơ được sản xuất bởi công ty Ipek Idrofil Pamuk – công ty hàng đầu Đông Âu về sản xuất bông an toàn.',
  },
  {
    id: Math.random(),
    typeOrder: 2,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Hàng mới',
    progress: 3,
    image: require('../../assets/images/category/imgProduct/type2/4.jpg'),
    title:
      'Tẩy Tế Bào Chết Toàn Thân Organic Shop Organic Coffee & Sugar Body Scrub 250ml',
    shortDescription:
      'Kem tẩy da chết toàn thân Organic Shop organic coffee & sugar body scrub chứa chiết xuất hạt cà phê giàu chất chống oxy hóa và thành phần vitamin có tác dụng loại bỏ tế bào chết, làm sạch lỗ chân lông và cung cấp các dưỡng chất cần thiết cho làn da toàn thân trở nên mịn màng và sáng mịn hơn sau mỗi lần sử dụng',
  },
  //điện thoại, máy tính bảng
  {
    id: Math.random(),
    typeOrder: 3,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'sản phẩm mới',
    progress: 1,
    image: require('../../assets/images/category/imgProduct/type3/1.jpg'),
    title: 'iPad WiFi 32GB New 2018 - Hàng Nhập Khẩu Chính Hãng',
    shortDescription:
      'iPad WiFi 32GB New 2018 vẫn giữ phong cách thiết kế quen thuộc như phiên bản tiền nhiệm 2017 với chất liệu nhôm nguyên khối cao cấp, các cạnh được bo cong mềm mại, tạo cảm giác cầm nắm thoải mái và chắc tay. Bên cạnh đó các chi tiết đều được gia công một cách tỉ mỉ và tinh tế, bạn sẽ phải Wow lên vì sức hút mãnh liệt từ vẻ đẹp bên ngoài của nó.',
  },
  {
    id: Math.random(),
    typeOrder: 3,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 90,
    image: require('../../assets/images/category/imgProduct/type3/2.jpg'),
    title: 'Điện Thoại Samsung Galaxy A10s (32GB/2GB) - Hàng Chính Hãng',
    shortDescription:
      'Điện Thoại Samsung Galaxy A10s (32GB/2GB) - Hàng Chính Hãng xem phim bất tận hay chơi game nhập vai MMORPG đỉnh cao trên Màn Hình Tràn Viền Infinity-V rộng 6.2 inch từ Galaxy A10s. Độ phân giải HD+ PLS mang đến cả thế giới giải trí sống động, chân thực hoàn hảo ngay trong bàn tay bạn.',
  },
  {
    id: Math.random(),
    typeOrder: 3,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'sản phẩm mới',
    progress: 40,
    image: require('../../assets/images/category/imgProduct/type3/3.jpg'),
    title: 'Điện Thoại Nokia 105 Dual Sim (2019) - Hàng Chính Hãng',
    shortDescription:
      'Điện Thoại Nokia 105 Dual Sim (2019) có thiết kế hiện đại với các đường bo tròn độc đáo cho bạn dễ dàng cầm giữ cũng như bỏ máy vào túi. Kiểu dáng thanh lịch, cá tính và năng động cho giới trẻ. Đặc biệt hơn với nhiều màu sắc bắt mắt cho bạn dễ dàng lựa chọn theo sở thích.',
  },
  {
    id: Math.random(),
    typeOrder: 3,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 87,
    image: require('../../assets/images/category/imgProduct/type3/4.jpg'),
    title: 'Điện Thoại Samsung Galaxy M10 (16GB/2GB) - Hàng Chính Hãng',
    shortDescription:
      'Điện Thoại Samsung Galaxy M10 là chiếc smartphone đầu tiên của Samsung sở hữu màn hình tràn viền mới Infinity-V. Cùng với kích thước lớn 6.2 inch và độ phân giải HD+, máy cho diện tích trải nghiệm rộng rãi, hình ảnh được hiển thị đầy đủ và tối đa. Hơn nữa, thiết kế nguyên khối của máy cùng phần viền được bo cong nhẹ cho người dùng cảm giác cầm nắm được thoải mái.',
  },
  //Thời trang
  {
    id: Math.random(),
    typeOrder: 4,
    flashName: 'sản phẩm mới',
    progress: 21,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type4/1.jpg'),
    title: 'Áo Khoác Vest, Blazer Nữ NA23 Sọc Caro',
    shortDescription:
      'Chất liệu thun wool có lớp lót, mặc mát dễ chịu. Kiểu dáng hợp thời trang, dễ mặc, dễ phối đồ. Size L : Ngực 96- Dài áo 68- Dài tay 59',
  },
  {
    id: Math.random(),
    typeOrder: 4,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Hàng trong ngày',
    progress: 13,
    image: require('../../assets/images/category/imgProduct/type4/2.jpg'),
    title:
      'Túi Vải Tote Kore3 Đeo Chéo Siêu Hot Vải Oxford Bền Bỉ - 3 Màu Lựa Chọn',
    shortDescription:
      'Túi là một phụ kiện thời trang không thể thiếu của các bạn trẻ dù là nam hay nữ, nó thể hiện phong cách cũng như cá tính của chủ nhân. Nếu bạn yêu thích phong cách đơn giản nhưng tinh tế thì chiếc Túi Vải Tote Kore3 là một lựa chọn hoàn hảo cho bạn trong mùa hè này đó!',
  },
  {
    id: Math.random(),
    typeOrder: 4,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 75,
    image: require('../../assets/images/category/imgProduct/type4/3.jpg'),
    title: 'Tất, vớ cổ ngắn chống hôi chân (Combo 10 đôi)',
    shortDescription:
      'Tất chống hôi chân được sản xuất từ 95% sợi tre thiên nhiên, giúp sản phẩm luôn mềm mại, êm chân, thấm hút mồ hôi tốt, chống hôi chân 24/7, tạo cảm giác mát thoải mái, công nghệ NANO bạc thẩm thấu vào từng sợi tre chống mùi hôi chân. Ngoài ra tất có thêm 5% sợi spandex giúp sản phẩm có độ đàn hồi.',
  },
  {
    id: Math.random(),
    typeOrder: 4,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'sản phẩm mới',
    progress: 13,
    image: require('../../assets/images/category/imgProduct/type4/4.jpg'),
    title:
      'Combo 5 đối tất mèo siêu mềm ấm dành cho bạn nữ (giao màu ngẫu nhiên)',
    shortDescription:
      'Combo 5 đối tất mèo siêu mềm ấm dành cho bạn nữ. Chất liệu: Len. Màu sắc: Hồng, ghi, đen, cam được giao ngẫu nhiên',
  },
  //Điện tử - điện lạnh
  {
    id: Math.random(),
    typeOrder: 5,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'sản phẩm mới',
    progress: 51,
    image: require('../../assets/images/category/imgProduct/type5/1.jpg'),
    title: 'Smart Tivi Samsung 55 inch 4K UHD UA55NU7090KXXV - Hàng Chính Hãng',
    shortDescription:
      'Smart Tivi Samsung 55 inch 4K UHD UA55NU7090KXXV có thiết kế viền mỏng với kiểu dáng cứng cáp, thể hiện sự hiện đại và tinh tế. Cùng với đó là phần chân đế được tạo kiểu hài hòa, chắc chắn, cho phép tivi có thể đứng vững vàng ở nhiều dạng mặt phẳng khác nhau. Màn hình có kích cỡ 55 inch, bạn có thể đặt tivi tại các không gian rộng rãi như phòng khách, phòng họp trong công ty,…',
  },
  {
    id: Math.random(),
    typeOrder: 5,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'sản phẩm mới',
    progress: 40,
    image: require('../../assets/images/category/imgProduct/type5/2.jpg'),
    title: 'Smart Tivi LG 43 inch 4K UHD 43UK6340PTF - Hàng chính hãng',
    shortDescription:
      'Smart Tivi LG 43 inch 4K UHD 43UK6340PTF được thiết kế với độ mỏng cực kỳ ấn tượng nhờ không sử dụng hệ thống đèn nền chiếu sáng, LG UHD TV có thể hòa hợp một cách hoàn hảo với mọi thiết kế nội thất nhờ có thiết kế siêu mỏng.',
  },
  {
    id: Math.random(),
    typeOrder: 5,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 89,
    image: require('../../assets/images/category/imgProduct/type5/3.jpg'),
    title: 'Smart Tivi LG 43 inch 4K UHD 43UK6200 - Hàng Chính Hãng',
    shortDescription:
      'Smart Tivi LG 43 inch 4K UHD 43UK6200 có thiết kế đơn giản với viền màn hình mỏng bằng thép kết hợp cùng chân đế dạng chữ V vững chắc, giúp tivi đứng vững trên mọi bề mặt phẳng. Khung kim loại trang nhã của tivi sẽ mang đến không gian nội thất nhà bạn một cảm giác hiện đại và vượt thời gian.',
  },
  {
    id: Math.random(),
    typeOrder: 5,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 90,
    image: require('../../assets/images/category/imgProduct/type5/4.jpg'),
    title: 'Máy Giặt Cửa Ngang Inverter LG FC1408S4W2 (8kg) - Hàng Chính Hãng',
    shortDescription:
      'Với động cơ truyền động trực tiếp Inverter hiện đại, máy giặt LG FC1408S4W2 cho khả năng vận hành êm ái, giảm thiểu tiếng ồn một cách tối đa, bạn có thể hoàn toàn yên tâm vì máy giặt sẽ không phát ra tiếng ồn lớn cho dù hoạt động vào ban đêm. Hơn nữa, công nghệ Inverter còn giúp hạn chế lượng điện tiêu thụ tối ưu, giúp gia đình bạn tiết kiệm chi phí điện mỗi tháng.',
  },
  //Nhà cửa, đời sống
  {
    id: Math.random(),
    typeOrder: 6,
    flashName: 'Sắp bán hết',
    progress: 96,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type6/1.jpg'),
    title:
      'Bộ 3 Hộp Thủy Tinh Chữ Nhật Kèm Túi Giữ Nhiệt Happy Cook HCG-03R (370ml)',
    shortDescription:
      'Bộ 3 Hộp Thủy Tinh Chữ Nhật Kèm Túi Giữ Nhiệt Happy Cook HCG-03R có thiết kế tinh tế sang trọng. Với dung tích hộp vừa phải và túi giữ nhiệt tiện dụng, giữ ấm được thức ăn lâu hơn.',
  },
  {
    id: Math.random(),
    typeOrder: 6,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 99,
    image: require('../../assets/images/category/imgProduct/type6/2.jpg'),
    title:
      'Bộ 10 Miếng Xốp Dán Tường 3D Chịu lực, chống nước, chống ẩm mốc 70x77cm DT26',
    shortDescription:
      'Xốp Dán Tường 3D Chịu lực, chống nước, chống ẩm mốc 70x77cm. Xuất xứ: Hong Kong - Trung Quốc. Tính Năng: trang trí tường, cách âm, cách nhiệt, chống ẩm, mốc,',
  },
  {
    id: Math.random(),
    typeOrder: 6,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Vừa mới bán',
    progress: 32,
    image: require('../../assets/images/category/imgProduct/type6/3.jpg'),
    title: 'Bộ 4 bình thủy tinh dây xách nắp bạc 500ml',
    shortDescription:
      'Hãy sử dụng bình thủy tinh thay thế cho bình nhựa, ly nhựa để bảo vệ môi trường bạn nhé. Cùng tạo thói quen tốt: xách bình đi mua trà sữa, sinh tố để hưởng ứng hot trend “Tuổi trẻ vì môi trường” nào!!!',
  },
  {
    id: Math.random(),
    typeOrder: 6,
    flashName: 'Vừa mới bán',
    progress: 10,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type6/4.jpg'),
    title: 'Thùng giấy ăn than tre 27 gói',
    shortDescription:
      'Giấy sợi tre Sipiao chiết xuất từ sợi tre, mềm, mịn, thấm nước tốt. Giấy dai, thấm nước không bị nát. Được làm từ bột trúc không có chất tẩy trắng nên an toàn khi sử dụng',
  },
  //Hàng quốc tế
  {
    id: Math.random(),
    typeOrder: 7,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Vừa mới bán',
    progress: 43,
    image: require('../../assets/images/category/imgProduct/type7/1.jpg'),
    title: 'Dây Sạc ANKER A7101621 Được Chứng Nhận MFi Cho Iphone / Ipad',
    shortDescription:
      'Dây Sạc ANKER A7101621 Được Chứng Nhận MFi Cho Iphone / Ipad có kích thước nhỏ gọn có thể cho vừa vào túi quần hay ba lô để bạn có thể dễ dàng mang theo bên người mỗi khi ra ngoài.',
  },
  {
    id: Math.random(),
    typeOrder: 7,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 50,
    image: require('../../assets/images/category/imgProduct/type7/2.jpg'),
    title: 'Khẩu Trang Có Van Thở Xiaomi Smartmi (3 Cái)',
    shortDescription:
      'Khẩu Trang Có Van Thở Xiaomi Smartmi (3 Cái) với chất liệu TPU của khẩu trang còn giúp tạo độ thoải mái khi đeo đồng thời tăng khả năng kháng bụi cho chiếc khẩu trang này.',
  },
  {
    id: Math.random(),
    typeOrder: 7,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Vừa mới bán',
    progress: 21,
    image: require('../../assets/images/category/imgProduct/type7/3.jpg'),
    title: 'Hộp Khẩu Trang Chống Bụi Có Van 3M KN90',
    shortDescription:
      'Hộp Khẩu Trang Chống Bụi Có Van 3M KN90 giúp bảo vệ tốt hệ hô hấp người sử dụng khi lưu thông trên đường, đồng thời đem lại cảm giác thoải mái khi sử dụng.',
  },
  {
    id: Math.random(),
    typeOrder: 7,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type7/4.jpg'),
    title: 'Tai Nghe Không Dây Bluetooth Xiaomi Redmi AirDots - Đen',
    shortDescription:
      'Tai nghe Bluetooth Redmi AirDots hỗ trợ lý ảo google có hỗ trợ siri của ios,  trả lời và từ chối cuộc gọi, giảm tiếng ồn tăng ấm bass , dùng 12 giờ khi sử dụng với hộp sạc , 4h nghe nhạc liên tục.',
  },
  //Bách hóa online
  {
    id: Math.random(),
    typeOrder: 8,
    flashName: 'Vừa mới bán',
    progress: 10,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type8/1.jpg'),
    title: 'Ngũ cốc hoa quả Calbee Furugura Nhật Bản gói 800g',
    shortDescription:
      'Ngũ cốc Calbee Nhật bản có chứa rất nhiều loại hạt và trái cây có giá trị dinh dưỡng cao, không thêm gia vị mà tận dụng những hương vị vốn có của loại trái cây đó. Từ trẻ nhỏ đến người già, ngay cả người bệnh tiểu đường cũng rất rất thích thú với loại ngũ cốc Calbee của Nhật bởi nó rất bổ dưỡng và thơm ngon. Chứa nhiều loại trái cây và hạt được sấy khô như là yến mạch, lúa mạch, táo, nho, đu đủ, dâu tây, dừa, ngô, bí ngô, hạnh nhân, gạo nâu, sữa….',
  },
  {
    id: Math.random(),
    typeOrder: 8,
    flashName: 'Vừa mới bán',
    progress: 12,
    price: Math.floor(100000 + Math.random() * 900000),
    image: require('../../assets/images/category/imgProduct/type8/2.jpg'),
    title: 'Dầu Đậu Nành Simply (5L / Chai)',
    shortDescription:
      'Dầu Đậu Nành Simply (5L / Chai) chai lớn với dung tích lên đến 5 lít giúp bạn tiết kiệm chi phí và thời gian mua sắm mà vẫn có thể chăm sóc tốt cho bữa ăn của cả gia đình. Dầu ăn được tinh chế từ các hạt đậu nành tươi ngon, trải qua quá trình chế biến trên dây chuyền công nghệ hiện đại nhằm đảm bảo giữ nguyên các dưỡng chất thiết yếu. Sản phẩm thích hợp để chế biến nhiều món ăn khác nhau.',
  },
  {
    id: Math.random(),
    typeOrder: 8,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 80,
    image: require('../../assets/images/category/imgProduct/type8/3.jpg'),
    title: 'Thùng Bia Tiger 24 Lon (330ml / Lon)',
    shortDescription:
      'Bia Tiger được lên men tự nhiên từ hoa bia và lúa mạch thượng hạng nhập khẩu từ Châu Âu tạo nên một loại bia với hương vị và chất lượng tuyệt hảo. Bia Tiger sẽ mang đến cho bạn những trải nghiệm khó quên, để cuộc vui càng thêm vui.',
  },
  {
    id: Math.random(),
    typeOrder: 8,
    price: Math.floor(100000 + Math.random() * 900000),
    flashName: 'Sắp bán hết',
    progress: 90,
    image: require('../../assets/images/category/imgProduct/type8/4.jpg'),
    title: 'Bột Baking Soda Đa Công Dụng Arm & Hammer (454G)',
    shortDescription:
      'Bột Baking Soda Đa Công Dụng  Arm & Hammer (454G) mang lại nhiều công dụng rất hữu ích. Đánh bay mụn đầu đen: Một muỗng cà phê Baking Soda trộn đều với một muỗng nước lọc rồi thoa lên vùng da có mụn đầu đen, để yên và thư giãn trong khoảng 10 phút, sau đó lau khô bằng khăn sạch, làm một vài lần bạn sẽ thấy mụn đầu đen giảm đi đáng kể đấy.',
  },
];
