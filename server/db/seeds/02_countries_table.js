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
      hint3: "This capital has 2 different and 2 vowels in total",
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
      hint3: "This capital has 2 different vowels and 3 vowels in total",
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
      hint3: "This capital has 3 different vowels and 3 vowels in total",
      hint4: "This capital begins with an A",
      hint5: "This capital is 7 letters long",
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      flag: "https://flagcdn.com/w320/ad.png",
      description:
        "Andorra la Vella is the capital of the Principality of Andorra. It is known for its picturesque beauty, charming old town, and tax-free shopping. The city is surrounded by stunning mountains and offers various outdoor activities, such as hiking and skiing. Fun fact: Andorra la Vella is one of the highest capital cities in Europe, located at an elevation of 3,356 feet (1,023 meters) above sea level.",
      hint1: "This capital is located in the Pyrenees mountains",
      hint2: "This capital has been involved in a famous dispute with France",
      hint3: "This capital is 3 words long",
      hint4: "This capital begins with an A",
      hint5: "This capital is 15 letters long not including spaces",
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      flag: "https://flagcdn.com/ar.svg",
      description:
        "Buenos Aires is the capital and largest city of Argentina. It is known for its vibrant culture, tango music and dance, and European-inspired architecture. The city offers a wide range of attractions, including historic neighborhoods, art galleries, and delicious cuisine. Fun fact: Buenos Aires is often referred to as the 'Paris of South America' due to its elegant boulevards and grand architecture.",
      hint1:
        "This capital is the second largest city in South America after São Paulo",
      hint2:
        "This capital is home to the famous La Recoleta Cemetery and the Teatro Colón",
      hint3: "This capital is 2 words long",
      hint4: "This capital begins with a B",
      hint5: "This capital is 12 letters long not including spaces",
    },
    {
      name: "Australia",
      capital: "Canberra",
      flag: "https://flagcdn.com/au.svg",
      description:
        "Canberra is the capital city of Australia. It is known for its modern architecture, beautiful parks, and cultural institutions. The city is home to many national monuments and landmarks, including the Australian War Memorial and Parliament House. Fun fact: Canberra was purpose-built as the capital of Australia and is located between Sydney and Melbourne.",
      hint1: "This capital is the largest inland city in Australia",
      hint2:
        "This capital was founded in 1913 as a compromise between Sydney and Melbourne",
      hint3: "This capital has 2 different vowels and 3 vowels in total",
      hint4: "This capital begins with a C",
      hint5: "This capital is 7 letters long",
    },
    {
      name: "Austria",
      capital: "Vienna",
      flag: "https://flagcdn.com/at.svg",
      description:
        "Vienna is the capital and largest city of Austria. It is known for its rich history, classical music, and stunning architecture. The city is home to many famous landmarks, including the Schönbrunn Palace and St. Stephen's Cathedral. Fun fact: Vienna is often ranked as one of the most livable cities in the world.",
      hint1: "Famous people such as Mozart and Beethoven lived in this capital",
      hint2:
        "This capital is known for its coffee house culture and delicious pastries",
      hint3: "This capital has 3 different vowels and 3 vowels in total",
      hint4: "This capital begins with a V",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      flag: "https://flagcdn.com/az.svg",
      description:
        "Baku is the capital and largest city of Azerbaijan. It is known for its modern architecture, rich history, and cultural heritage. The city is located on the Caspian Sea and offers beautiful views of the waterfront. Fun fact: Baku is home to the Flame Towers, a trio of skyscrapers that are illuminated with LED lights at night.",
      hint1: "This capital holds a F1 Grand Prix every year",
      hint2: "This capital was once given the nickname 'Paris of the East'",
      hint3: "This capital has 2 different vowels and 2 vowels in total",
      hint4: "This capital begins with a B",
      hint5: "This capital is 4 letters long",
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      flag: "https://flagcdn.com/bs.svg",
      description:
        "Nassau is the capital and largest city of The Bahamas. It is known for its beautiful beaches, vibrant culture, and colorful architecture. The city offers a wide range of activities, including snorkeling, diving, and shopping. Fun fact: Nassau is located on New Providence Island and is a popular cruise ship destination.",
      hint1: "This capital was once the pirate stronghold of the Caribbean",
      hint2: "This capital is located on New Providence Island",
      hint3: "This capital has 1 different vowel and 2 vowels in total",
      hint4: "This capital begins with an N",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Bahrain",
      capital: "Manama",
      flag: "https://flagcdn.com/bh.svg",
      description:
        "Manama is the capital and largest city of Bahrain. It is known for its modern skyline, luxury shopping malls, and vibrant nightlife. The city offers a mix of traditional and contemporary attractions, including the Bahrain National Museum and the Al Fateh Grand Mosque. Fun fact: Manama is home to the Bahrain International Circuit, which hosts the Formula One Bahrain Grand Prix.",
      hint1:
        "This capital was once known as Dilmun and was a major trading hub",
      hint2: "This capital is located on an island in the Persian Gulf",
      hint3: "This capital has 1 different vowel and 2 vowels in total",
      hint4: "This capital begins with an M",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      flag: "https://flagcdn.com/bd.svg",
      description:
        "Dhaka is the capital and largest city of Bangladesh. It is known for its bustling streets, vibrant markets, and rich cultural heritage. The city is home to many historical landmarks, such as the Lalbagh Fort and the National Parliament House. Fun fact: Dhaka is one of the fastest-growing cities in the world.",
      hint1:
        "This capital is one of the most densely populated cities in the world",
      hint2:
        "This capital is located on the banks of the Buriganga River. Locals call it the 'City of Mosques'",
      hint3: "This capital has 1 different vowel and 2 vowels in total",
      hint4: "This capital begins with a D",
      hint5: "This capital is 5 letters long",
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      flag: "https://flagcdn.com/w320/bb.svg",
      description:
        "Bridgetown is the capital and largest city of Barbados. It is known for its beautiful beaches, colonial architecture, and vibrant culture. The city offers a mix of historical sites, such as the Garrison Historic Area, and modern attractions, including shopping malls and restaurants. Fun fact: Bridgetown is a UNESCO World Heritage Site.",
      hint1:
        "This capital was once a British colony and is known for its British influence",
      hint2: "This capital is known as the 'City of Bridges'",
      hint3: "This capital has 3 different vowels and 3 vowels in total",
      hint4: "This capital begins with a B",
      hint5: "This capital is 10 letters long",
    },
    {
      name: "Belarus",
      capital: "Minsk",
      flag: "https://flagcdn.com/by.svg",
      description:
        "Minsk is the capital and largest city of Belarus. It is known for its Soviet-era architecture, vibrant cultural scene, and rich history. The city offers a mix of historical landmarks, such as the Independence Square and the National Library of Belarus, as well as modern attractions, including shopping malls and parks. Fun fact: Minsk is often called the 'Hero City' due to its resilience during World War II.",
      hint1: "This capital is located on the Svislach and Nyamiha rivers",
      hint2:
        "This capital has had a turbulent history, including being destroyed during World War II and rebuilt afterwards",
      hint3: "This capital has 1 different vowel and 1 vowel in total",
      hint4: "This capital begins with an M",
      hint5: "This capital is 5 letters long",
    },
    {
      name: "Belgium",
      capital: "Brussels",
      flag: "https://flagcdn.com/be.svg",
      description:
        "Brussels is the capital and largest city of Belgium. It is known for its stunning architecture, delicious cuisine, and vibrant cultural scene. The city offers a mix of historical landmarks, such as the Grand Place and the Atomium, as well as modern attractions, including museums and art galleries. Fun fact: Brussels is often considered the de facto capital of the European Union.",
      hint1: "This capital is also known as the 'Capital of Europe'",
      hint2:
        "This capital has had a significant role in European history and politics, such as hosting the headquarters of NATO and the European Commission",
      hint3: "This capital has 2 different vowels and 2 vowels in total",
      hint4: "This capital begins with a B",
      hint5: "This capital is 8 letters long",
    },
    {
      name: "Belize",
      capital: "Belmopan",
      flag: "https://flagcdn.com/bz.svg",
      description:
        "Belmopan is the capital and largest city of Belize. It is known for its natural beauty, diverse wildlife, and Mayan ruins. The city offers a mix of outdoor activities, such as hiking and cave exploration, as well as cultural experiences, including visiting local markets and learning about the Mayan history. Fun fact: Belmopan is one of the smallest capital cities in the world.",
      hint1: "This capital is located at the geographic center of Belize",
      hint2:
        "This capital has the smallest population of any capital city in Central America",
      hint3: "This capital has 3 different vowels and 3 vowels in total",
      hint4: "This capital begins with a B",
      hint5: "This capital is 8 letters long",
    },
    {
      name: "Benin",
      capital: "Porto-Novo",
      flag: "https://flagcdn.com/bj.svg",
      description:
        "Porto-Novo is the official capital of Benin. It is known for its rich history, vibrant culture, and colorful markets. The city offers a mix of traditional and modern attractions, including historical landmarks, such as the Royal Palace and the Ethnographic Museum, as well as contemporary art galleries and restaurants. Fun fact: Porto-Novo is located on the coast of the Gulf of Guinea.",
      hint1: "This capital has a French name that means 'New Port'",
      hint2:
        "Some people consider this capital to be the cultural capital of Benin, while Cotonou is the economic capital",
      hint3: "This capital is 2 words long with a hyphen",
      hint4: "This capital begins with a P",
      hint5: "This capital is 10 letters long",
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      flag: "https://flagcdn.com/bt.svg",
      description:
        "Thimphu is the capital and largest city of Bhutan. It is known for its stunning natural beauty, traditional architecture, and vibrant culture. The city offers a mix of historical landmarks, such as the Tashichho Dzong and the National Memorial Chorten, as well as modern attractions, including shopping malls and restaurants. Fun fact: Thimphu is one of the only capital cities in the world without traffic lights.",
      hint1: "This capital is located in the Himalayas",
      hint2: "This capital is known as the happiest city in Asia",
      hint3: "This capital has 2 different vowels and 2 vowels in total",
      hint4: "This capital begins with a T",
      hint5: "This capital is 6 letters long",
    },
    {
      name: "Bolivia",
      capital: "La Paz",
      flag: "https://flagcdn.com/bo.svg",
      description:
        "La Paz is the administrative capital of Bolivia. It is known for its stunning mountain scenery, colorful markets, and rich cultural heritage. The city offers a mix of historical landmarks, such as the Witches' Market and the San Francisco Church, as well as modern attractions, including museums and art galleries. Fun fact: La Paz is one of the highest capital cities in the world, located at an elevation of over 11,900 feet (3,600 meters) above sea level.",
      hint1: "This capital is the highest capital city in the world",
      hint2:
        "This capital was known for its silver mines during the Spanish colonial period",
      hint3: "This capital is 2 words long with a space",
      hint4: "This capital begins with a L",
      hint5: "This capital is 6 letters long",
    },
  ]);
};
