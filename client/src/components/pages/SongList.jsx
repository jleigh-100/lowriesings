import React from "react";
import { Container } from "../Body.jsx";
import { useWindowDimensions } from "../../hooks.js";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${(props) => (props.width > 768 ? "50%" : "100%")};
  border: 1px solid black;
  border-radius: 10px;
`;

export const SongList = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <h1>Song List</h1>
      <StyledImg width={width} src="/images/singing.jpg" alt="Lowrie singing" />
      <p>
        Please just ask if you would like a specific song and I would be more
        than happy to learn it
      </p>
      <ul>
        <p>A</p>
        <li>ABBA - I Do, I Do, I Do, I Do, I Do,</li>
        <li>ABBA - Honey Honey</li>
        <li>ABBA - Mama Mia</li>
        <li>Adele - Make You Feel My Love</li>
        <li>Adele - One and Only</li>
        <li>Adele - Someone Like You</li>
        <li>Aerosmith - Don &#x27;t Wanna Miss A Thing</li>
        <li>Alicia Keyes - If I Ain &#x27;t Got You</li>
        <li>Amazing Grace</li>
        <li>Amy Winehouse - Valerie </li>
        <li>Aretha Franklin - Think</li>
        <li>Aretha Franklin - I Say a Little Prayer</li>
        <li>Aretha Franklin - (You Make Me Feel Like) A Natural Woman</li>
        <li>Aretha Franklin - Bridge Over Troubled Water</li>
        <li>Aretha Franklin - Respect</li>
        <li>Ariana Grande - Into You</li>
        <p>B</p>
        <li>Beatles - All You Need Is Love</li>
        <li>Beatles - Here Comes The Sun</li>
        <li>Beatles - Hey Jude</li>
        <li>Beatles - Let It Be</li>
        <li>Becky Hill - Crazy What Love Can Do</li>
        <li>Ben E. King - Stand By Me</li>
        <li>Beyonce - Love On Top</li>
        <li>Beyonce - Ave Maria</li>
        <li>Beyonce - Crazy In Love</li>
        <li>Beyonce - Halo</li>
        <li>Bill Withers - Lean On Me</li>
        <li>Billie Eilish - Ocean Eyes</li>
        <li>Billie Eilish - Birds Of A Feather</li>
        <li>Birdy - Skinny Love</li>
        <li>Birdy - Wings</li>
        <li>Bruno Mars - Grenade</li>
        <li>Bruno Mars - Marry You</li>
        <li>Bruno Mars - Just The Way You Are</li>
        <p>C</p>
        <li>Christina Perri - A Thousand Years</li>
        <li>Clean Bandit - Rather Be</li>
        <li>Coldplay - Yellow</li>
        <li>Coldplay - Fix You</li>
        <li>Corinne Bailey Rae - Put Your Records On</li>
        <li>Corinne Bailey Rae - Like a Star</li>
        <li>Cyndi Lauper - Time After Time</li>
        <li>Cyndi Lauper - Girls Just Wanna Have Fun</li>
        <p>E</p>
        <li>Ed Sheeran - Thinking Out Loud</li>
        <li>Ed Sheeran - First Times</li>
        <li>Ed Sheeran - Tenerife Sea</li>
        <li>Ed Sheeran - Photograph</li>
        <li>Ed Sheeran - Perfect</li>
        <li>Ed Sheeran - Kiss Me</li>
        <li>Ed Sheeran - Shivers</li>
        <li>Ed Sheeran - Happier</li>
        <li>Ed Sheeran - Galway Girl</li>
        <li>Ellie Goulding - How Long Will I Love You</li>
        <li>Elton John - Can You Feel The Love Tonight</li>
        <li>Elton John - Your Song</li>
        <li>Elvis Presley - Can &#x27;t Help Falling in Love</li>
        <li>Emeli Sande - Next To Me</li>
        <li>Etta James - At Last</li>
        <li>Eva Cassidy - Songbird</li>
        <p>F</p>
        <li>Frank Sinatra - Fly Me To The Moon</li>
        <p>G</p>
        <li>Gabrielle Aplin - The Power Of Love</li>
        <li>George Michael - Faith</li>
        <p>H</p>
        <li>Harry Styles - Adore You</li>
        <p>J</p>
        <li>James Arthur - Falling Like The Stars</li>
        <li>James Arthur - Say You Won &#x27;t Let Go</li>
        <li>Jamie Lawson - I Wasn &#x27;t Expecting That</li>
        <li>Jason Mraz - I Won &#x27;t Give Up</li>
        <li>Jason Mraz - I &#x27;m Yours</li>
        <li>Jason Mraz - Lucy</li>
        <li>Jessie J - Price Tag</li>
        <li>Justin Bieber - Love Yourself</li>
        <li>John Legend - All Of Me</li>
        <p>L</p>
        <li>Leon Bridges - Beyond</li>
        <li>Leonard Cohen - Hallelujah</li>
        <li>Lily Allen - Smile</li>
        <li>Little Mix - Black Magic</li>
        <li>Lorde - Royals</li>
        <p>M</p>
        <li>Marvin Gaye - Ain &#x27;t No Mountain High Enough</li>
        <li>McFadden &amp;Whitehead - Ain &#x27;t No Stoppin &#x27;Us Now</li>
        <li>Meghan Trainor - Dear Future Husband</li>
        <li>Michael Buble - Everything</li>
        <li>Michael Buble - Feeling Good</li>
        <li>Miley Cyrus - Flowers </li>
        <p>N</p>
        <li>Natalie Cole - This Will Be (An Everlasting Love)</li>
        <li>Natasha Beddingfield - Unwritten</li>
        <li>Nial Horan - Slow Hands</li>
        <li>Noah Kahan - Stick Season</li>
        <p>O</p>
        <li>One Direction - Little Things</li>
        <p>Q</p>
        <li>Queen - Crazy Little Thing Called Love</li>
        <p>R</p>
        <li>Radiohead - Creep</li>
        <li>Rag N Bone Man - Human</li>
        <li>Rihanna - Love On The Brain </li>
        <li>Rihanna - Stay</li>
        <li>Ruelle - I Get To Love You</li>
        <li>RuthAnne - The Vow</li>
        <p>S</p>
        <li>Sabrina Carpenter - Espresso</li>
        <li>Sam Smith - Latch</li>
        <li>Sam Smith - Stay With Me</li>
        <li>Sam Smith - How Will I Know</li>
        <li>Sixpence None The Richer - Kiss Me</li>
        <li>Snow Patrol - Chasing Cars</li>
        <li>Stevie Wonder - Signed, Sealed, Delivered (I &#x27;m Yours)</li>
        <li>Stevie Wonder - Isn &#x27;t She Lovely</li>
        <li>Stooshe - Black Heart</li>
        <p>T</p>
        <li>Taylor Swift - Love Story</li>
        <li>Taylor Swift - Our Song</li>
        <li>Taylor Swift - Lover</li>
        <li>Taylor Swift - 22</li>
        <li>Tina Turner - What &#x27;s Love Got To Do</li>
        <li>Tracey Chapman - Fast Car</li>
        <p>W</p>
        <li>Whitney Houston - Wanna Dance With Somebody</li>
        <p>Z</p>
        <li>Zara Larson - Lush Life</li>
        <p>**Disney Songs**</p>
        <li>Aladdin - A Whole New World</li>
        <li>Beauty and The Beast - Tale As Old As Time</li>
        <li>Hercules - I Won &#x27;t Say Say (I &#x27;m In Love)</li>
        <li>Lion King - Can You Feel The Love Tonight</li>
        <li>Moana - How Far I &#x27;ll Go</li>
        <li>Tangled - I See The Light</li>
        <li>Tangled - When Will My Life Begin</li>
        <li>The Little Mermaid - Part of Your World</li>
        <p>**Christmas Songs**</p>
        <li>Ariana Grande - Santa Tell Me</li>
        <li>Dean Martin - Winter Wonderland</li>
        <li>Joni Mitchell - River</li>
        <li>Kelly Clarkson - Underneath The Tree</li>
        <li>Leona Lewis - One More Sleep</li>
        <li>Mariah Carey - All I Want For Christmas Is You</li>
        <li>Michael Buble - Let It Snow</li>
        <li>
          Michael Buble - It &#x27;s Beginning to Look a Lot Like Christmas
        </li>
        <li>Sia - Snowman</li>
        <li>Wham - Last Christmas</li>
        <li>Wizzard - I Wish It Could Be Christmas Everyday</li>
      </ul>
    </Container>
  );
};
