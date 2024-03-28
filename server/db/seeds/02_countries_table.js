/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("countries").del();
  await knex("countries").insert([
    {
      name: "Afghanistan",
      capital: "Kabul",
      flag: "https://https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png.info/img/flags/af-flag.gif",
      description:
        "Kabul is known for its rich history and cultural heritage. It is home to many historical sites, including the famous Babur's Gardens and the Kabul Museum. The city is also known for its vibrant bazaars and delicious Afghan cuisine. Fun fact: Kabul is one of the highest capital cities in the world, located at an elevation of over 5,900 feet (1,800 meters) above sea level.",
      hint1: "This capital has been inhabited for over 3,500 years",
      hint2: "This capital has been through many wars",
      hint3: "This capital has 2 different vowels in its name",
      hint4: "This capital begins with a K",
      hint5: "This capital is 5 letters long",
    },
    {
      name: "Albania",
      capital: "Tirana",
      flag: "https://flagcdn.com/al.svg",
      description:
        "Tirana is known for its vibrant culture, lively nightlife, and beautiful architecture. The city is home to many museums, art galleries, and theaters, as well as a variety of restaurants and cafes. Fun fact: Tirana is one of the sunniest cities in Europe, with an average of 2,544 hours of sunshine per year.",
      hint1: "This capital is near the Adriatic Sea",
      hint2: "From this capital, you can see the Dajti Mountain",
      hint3: "This capital has 2 different vowels in its name",
      hint4: "This capital begins with a T",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Algeria",
      capital: "Algiers",
      flag: "https://flagcdn.com/dz.svg",
      description:
        "Algiers is the capital and largest city of Algeria. It is known for its rich history, diverse culture, and stunning architecture. The city is home to many historical landmarks, such as the Casbah of Algiers and the Notre Dame d'Afrique. Fun fact: Algiers is located on the Mediterranean Sea and offers beautiful views of the coastline.",
      hint1: "This capital is near the Mediterranean Sea",
      hint2: "This capital has was once a pirate stronghold",
      hint3: "This capital has 3 different vowels in its name",
      hint4: "This capital begins with an A",
      hint5: "This capital is 7 letters long",
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      flag: "https://flagcdn.com/w320/ad.png",
      description:
        "Andorra la Vella is the capital of the Principality of Andorra. It is known for its picturesque beauty, charming old town, and tax-free shopping. The city is surrounded by stunning mountains and offers various outdoor activities, such as hiking and skiing. Fun fact: Andorra la Vella is one of the highest capital cities in Europe, located at an elevation of 3,356 feet (1,023 meters) above sea level.",
      hint1: "This capital has a population of 22,256",
      hint2: "This capital was founded in the 9th century",
      hint3: "This capital is famous for its tax-free shopping",
      hint4: "This capital begins with an A",
      hint5: "This capital is 15 letters long",
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      flag: "https://flagcdn.com/ar.svg",
      description:
        "Buenos Aires is the capital and largest city of Argentina. It is known for its vibrant culture, tango music and dance, and European-inspired architecture. The city offers a wide range of attractions, including historic neighborhoods, art galleries, and delicious cuisine. Fun fact: Buenos Aires is often referred to as the 'Paris of South America' due to its elegant boulevards and grand architecture.",
      hint1: "This capital has a population of 2.9 million",
      hint2: "This capital was founded in 1536",
      hint3: "This capital is famous for tango music and dance",
      hint4: "This capital begins with a B",
      hint5: "This capital is 12 letters long",
    },
    {
      name: "Australia",
      capital: "Canberra",
      flag: "https://flagcdn.com/au.svg",
      description:
        "Canberra is the capital city of Australia. It is known for its modern architecture, beautiful parks, and cultural institutions. The city is home to many national monuments and landmarks, including the Australian War Memorial and Parliament House. Fun fact: Canberra was purpose-built as the capital of Australia and is located between Sydney and Melbourne.",
      hint1: "This capital has a population of 426,704",
      hint2: "This capital was founded in 1913",
      hint3: "This capital is famous for its national monuments",
      hint4: "This capital begins with a C",
      hint5: "This capital is 7 letters long",
    },
    {
      name: "Austria",
      capital: "Vienna",
      flag: "https://flagcdn.com/at.svg",
      description:
        "Vienna is the capital and largest city of Austria. It is known for its rich history, classical music, and stunning architecture. The city is home to many famous landmarks, including the Schönbrunn Palace and St. Stephen's Cathedral. Fun fact: Vienna is often ranked as one of the most livable cities in the world.",
      hint1: "This capital has a population of 1.9 million",
      hint2: "This capital was founded in the 1st century AD",
      hint3: "This capital is famous for classical music",
      hint4: "This capital begins with a V",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      flag: "https://flagcdn.com/az.svg",
      description:
        "Baku is the capital and largest city of Azerbaijan. It is known for its modern architecture, rich history, and cultural heritage. The city is located on the Caspian Sea and offers beautiful views of the waterfront. Fun fact: Baku is home to the Flame Towers, a trio of skyscrapers that are illuminated with LED lights at night.",
      hint1: "This capital has a population of 2.3 million",
      hint2: "This capital was founded in the 5th century BC",
      hint3: "This capital is located on the Caspian Sea",
      hint4: "This capital begins with a B",
      hint5: "This capital is 4 letters long",
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      flag: "https://flagcdn.com/bs.svg",
      description:
        "Nassau is the capital and largest city of The Bahamas. It is known for its beautiful beaches, vibrant culture, and colorful architecture. The city offers a wide range of activities, including snorkeling, diving, and shopping. Fun fact: Nassau is located on New Providence Island and is a popular cruise ship destination.",
      hint1: "This capital has a population of 274,400",
      hint2: "This capital was founded in 1695",
      hint3: "This capital is famous for its pirate history",
      hint4: "This capital begins with an N",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Bahrain",
      capital: "Manama",
      flag: "https://flagcdn.com/bh.svg",
      description:
        "Manama is the capital and largest city of Bahrain. It is known for its modern skyline, luxury shopping malls, and vibrant nightlife. The city offers a mix of traditional and contemporary attractions, including the Bahrain National Museum and the Al Fateh Grand Mosque. Fun fact: Manama is home to the Bahrain International Circuit, which hosts the Formula One Bahrain Grand Prix.",
      hint1: "This capital has a population of 1.6 million",
      hint2: "This capital was founded in the 4th century BC",
      hint3: "This capital is known for its luxury shopping",
      hint4: "This capital begins with an M",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      flag: "https://flagcdn.com/bd.svg",
      description:
        "Dhaka is the capital and largest city of Bangladesh. It is known for its bustling streets, vibrant markets, and rich cultural heritage. The city is home to many historical landmarks, such as the Lalbagh Fort and the National Parliament House. Fun fact: Dhaka is one of the fastest-growing cities in the world.",
      hint1: "This capital has a population of 21 million",
      hint2: "This capital was founded in the 7th century",
      hint3: "This capital is famous for its rickshaws",
      hint4: "This capital begins with a D",
      hint5: "This capital is 5 letters long",
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      flag: "https://flagcdn.com/w320/bb.svg",
      description:
        "Bridgetown is the capital and largest city of Barbados. It is known for its beautiful beaches, colonial architecture, and vibrant culture. The city offers a mix of historical sites, such as the Garrison Historic Area, and modern attractions, including shopping malls and restaurants. Fun fact: Bridgetown is a UNESCO World Heritage Site.",
      hint1: "This capital has a population of 110,000",
      hint2: "This capital was founded in 1628",
      hint3: "This capital is famous for its UNESCO World Heritage Site",
      hint4: "This capital begins with a B",
      hint5: "This capital is 10 letters long",
    },
    {
      name: "Belarus",
      capital: "Minsk",
      flag: "https://flagcdn.com/by.svg",
      description:
        "Minsk is the capital and largest city of Belarus. It is known for its Soviet-era architecture, vibrant cultural scene, and rich history. The city offers a mix of historical landmarks, such as the Independence Square and the National Library of Belarus, as well as modern attractions, including shopping malls and parks. Fun fact: Minsk is often called the 'Hero City' due to its resilience during World War II.",
      hint1: "This capital has a population of 1.9 million",
      hint2: "This capital was founded in the 11th century",
      hint3: "This capital is known for its Soviet-era architecture",
      hint4: "This capital begins with an M",
      hint5: "This capital is 5 letters long",
    },
    {
      name: "Belgium",
      capital: "Brussels",
      flag: "https://flagcdn.com/be.svg",
      description:
        "Brussels is the capital and largest city of Belgium. It is known for its stunning architecture, delicious cuisine, and vibrant cultural scene. The city offers a mix of historical landmarks, such as the Grand Place and the Atomium, as well as modern attractions, including museums and art galleries. Fun fact: Brussels is often considered the de facto capital of the European Union.",
      hint1: "This capital has a population of 1.2 million",
      hint2: "This capital was founded in the 10th century",
      hint3: "This capital is known for its delicious cuisine",
      hint4: "This capital begins with a B",
      hint5: "This capital is 8 letters long",
    },
    {
      name: "Belize",
      capital: "Belmopan",
      flag: "https://flagcdn.com/bz.svg",
      description:
        "Belmopan is the capital and largest city of Belize. It is known for its natural beauty, diverse wildlife, and Mayan ruins. The city offers a mix of outdoor activities, such as hiking and cave exploration, as well as cultural experiences, including visiting local markets and learning about the Mayan history. Fun fact: Belmopan is one of the smallest capital cities in the world.",
      hint1: "This capital has a population of 20,000",
      hint2: "This capital was founded in 1970",
      hint3: "This capital is known for its Mayan ruins",
      hint4: "This capital begins with a B",
      hint5: "This capital is 8 letters long",
    },
  ]);
};
