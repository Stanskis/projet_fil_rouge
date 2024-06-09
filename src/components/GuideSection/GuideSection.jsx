import Image from './Segotep-Build_left.webp'
import './GuideSection.css'

export default function GuideSection(){

    return (
      <section className="bg-img bg-color">
        <div className="container text text-md-end guide p-5 ">
        {/* <img className='bg-img' src={Image} alt="" /> */}
          <h1>Lorem ipsum dolor sit amet</h1>
          <div>
            <p>
              Consectetur adipiscing elit. In dui tellus, euismod nec rutrum eu,
              congue et metus. Quisque tellus orci, dignissim a orci vitae,
              pretium pulvinar sapien. Curabitur non vestibulum leo. Nulla
              condimentum nibh et lectus sodales fringilla. Nunc sit amet lectus
              sit amet magna vehicula accumsan eget posuere dui. Sed facilisis
              arcu eget lacus lacinia scelerisque. Praesent maximus mi eu arcu
              imperdiet, eu gravida diam scelerisque. Nullam suscipit rutrum
              ipsum quis consequat. Phasellus sit amet ipsum ut odio dignissim
              efficitur. Nulla lacinia augue id ipsum blandit, mattis egestas
              quam dignissim. Proin ligula quam, ultricies non purus ut, feugiat
              convallis dui.
            </p>
            <p>
              Pellentesque porttitor nunc urna, sed vehicula est molestie id.
              Vivamus molestie imperdiet orci a laoreet. Curabitur ex ante,
              ullamcorper et nisl vitae, iaculis efficitur lorem. Morbi mollis
              erat non dui consequat, at vehicula neque condimentum. Aenean non
              nisl et ipsum mattis sagittis quis vel dolor. Vestibulum non
              sagittis odio. Proin sit amet convallis lorem. Cras eu arcu non
              magna pharetra ullamcorper pretium eget nisi. Mauris molestie in
              nibh id pretium. Maecenas tincidunt nunc sit amet dui vehicula
              aliquet.
            </p>
            <p>
              Proin tempus semper leo, accumsan imperdiet sem convallis id. Nunc
              malesuada lacus in nisi consectetur, ac blandit purus hendrerit.
              Etiam nec ex ultricies, lobortis felis in, sollicitudin nisl.
              Vestibulum non velit risus. Vestibulum et metus rhoncus nibh
              auctor aliquam a eget magna.
            </p>
          </div>
        </div>
      </section>
    );
}