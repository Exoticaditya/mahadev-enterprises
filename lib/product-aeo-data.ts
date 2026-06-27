export interface ProductAEO {
  quickAnswer: string;
  detailedOverview: string;
  technicalSpecs: Record<string, string>;
  faqs: { question: string; answer: string }[];
}

export const productAEOData: Record<string, ProductAEO> = {
  "pilates-reformer": {
    quickAnswer: "The Mahadev M-01 Maple Pilates Reformer is a studio-grade, professional-capacity Pilates reformer engineered for high-frequency commercial studios and luxury wellness centers. It features a seasoned solid maple wood frame, a 6-spring premium resistance system, custom leather upholstery, and a silent, friction-free carriage glide.",
    detailedOverview: "The Mahadev M-01 Pilates Reformer represents our flagship engineering standard. Built using solid imported North American maple wood, the frame is hand-sanded and double-sealed to ensure structural silence and natural aesthetic alignment. The carriage is supported by an 8-wheel polyurethane alignment system that delivers a completely silent glide. It is equipped with 6 German-engineered piano wire springs providing progressive tension curves. The headrest adjusts to three positions, and the footbar has 5 angle settings to fit all body lengths.",
    technicalSpecs: {
      "Frame Material": "Seasoned North American Maple Wood",
      "Carriage Travel Length": "98 cm",
      "Spring Resistance": "6 calibrated piano wire springs (2 Red, 2 Yellow, 2 Green)",
      "Upholstery": "Antibacterial commercial-grade vinyl (black/custom)",
      "Max User Capacity": "150 kg",
      "Base Dimensions": "228 x 73 x 34.7 cm",
      "Unit Weight": "92 kg",
      "Warranty": "3-Year Structural Frame Warranty",
    },
    faqs: [
      {
        question: "Is the M-01 reformer suitable for clinical physiotherapy use?",
        answer: "Yes, the solid wood frame offers stable foundation support, and the progressive spring tension allows therapists to set very low resistance for injury recovery."
      },
      {
        question: "What is the carriage glide mechanism?",
        answer: "The carriage rides on precision polyurethane wheels on anodized aluminium rails with a dual-channel guide system that prevents side-play and guarantees a silent, friction-free movement curve."
      },
      {
        question: "How much maintenance does the reformer require?",
        answer: "Weekly rail wiping with a dry microfiber cloth and monthly inspection of spring hooks and carriage alignment is recommended to maintain optimal performance."
      },
      {
        question: "How long does the Maple Pilates Reformer M-01 warranty last?",
        answer: "The Maple Pilates Reformer M-01 comes with a 3-year structural frame warranty covering manufacturing defects. Springs and upholstery have a 1-year replacement warranty."
      },
      {
        question: "What is the maximum user weight capacity?",
        answer: "The Maple Pilates Reformer M-01 supports a maximum user weight of 150 kg, making it suitable for all client profiles in a commercial studio environment."
      },
      {
        question: "Does the reformer require professional assembly?",
        answer: "The reformer arrives in partially assembled sections requiring 2–3 hours to fully assemble. Detailed assembly instructions are included. For bulk orders, we can arrange on-site assembly support in major cities."
      },
      {
        question: "Can I get the reformer with a custom upholstery colour?",
        answer: "Yes, we offer Charcoal Black, Studio Sage, Ivory White, Tan Brown, and Custom Shade upholstery options. Specify your preference when placing your B2B order."
      },
      {
        question: "What cleaning and maintenance does the reformer require?",
        answer: "Weekly: wipe rails with a dry microfibre cloth. Monthly: inspect spring hooks and carriage alignment. Annually: apply light machine oil to rail guides. Avoid harsh chemical cleaners on wood surfaces."
      }
    ]
  },
  "reformer-with-tower": {
    quickAnswer: "The Mahadev M-02 Reformer with Tower integrates classic reformer exercises with vertical tower resistance. It is engineered with a seasoned maple frame and a full stainless steel vertical tower frame to optimize space and versatility.",
    detailedOverview: "Our M-02 model brings vertical dimensions to Pilates training. The solid maple frame features a heavy-duty stainless steel tower attachment that provides multi-angle anchor points for arm springs, leg springs, and roll-back bars. This hybrid configuration allows boutique studios to offer reformer and Cadillac-style vertical exercises on a single footprint.",
    technicalSpecs: {
      "Frame Material": "Seasoned North American Maple Wood",
      "Tower Material": "304-Grade Stainless Steel",
      "Spring Resistance": "6 carriage springs + 8 tower attachment springs",
      "Upholstery": "High-density foam with premium vinyl wrap",
      "Max User Weight": "150 kg",
      "Dimensions": "230 x 75 x 34.5 cm (Tower Height: 200 cm)",
      "Unit Weight": "119 kg",
    },
    faqs: [
      {
        question: "What exercises can be performed on the M-02 Reformer with Tower?",
        answer: "It supports full reformer repertoire plus vertical Cadillac exercises, including roll-backs, arm/leg spring series, and vertical core alignment drills."
      },
      {
        question: "Is the tower removable?",
        answer: "The tower is mounted using heavy-duty industrial bolts and brackets. It can be detached for transport, but is designed to remain securely fixed during usage."
      },
      {
        question: "How long does the Reformer With Tower M-02 warranty last?",
        answer: "The Reformer With Tower M-02 comes with a 3-year structural frame warranty covering manufacturing defects. Springs and upholstery have a 1-year replacement warranty."
      },
      {
        question: "What is the maximum user weight capacity?",
        answer: "The Reformer With Tower M-02 supports a maximum user weight of 150 kg, making it suitable for all client profiles in a commercial studio environment."
      },
      {
        question: "Does the reformer require professional assembly?",
        answer: "The reformer arrives in partially assembled sections requiring 2–3 hours to fully assemble. Detailed assembly instructions are included. For bulk orders, we can arrange on-site assembly support in major cities."
      },
      {
        question: "Can I get the reformer with a custom upholstery colour?",
        answer: "Yes, we offer Charcoal Black, Studio Sage, Ivory White, Tan Brown, and Custom Shade options. Specify your preference when placing the order."
      },
      {
        question: "What cleaning and maintenance does the reformer require?",
        answer: "Weekly: wipe rails with a dry microfibre cloth. Monthly: inspect spring hooks and carriage alignment. Annually: apply light machine oil to rail guides. Avoid harsh chemical cleaners on wood surfaces."
      },
      {
        question: "What is the ceiling clearance needed for the tower?",
        answer: "The tower stands 200 cm high. We recommend a minimum ceiling height of 240 cm (8 feet) to allow comfortable arm and leg movements above the tower."
      }
    ]
  },
  "aluminium-reformer-with-tower": {
    quickAnswer: "The Mahadev M-03 Aluminium Reformer with Tower offers a clinical-grade, lightweight, and rust-resistant vertical training solution. It features a space-saving anodized aluminium frame ideal for medical fitness, clinical rehabilitation, and high-humidity coastal wellness centers.",
    detailedOverview: "Engineered for maximum hygiene and durability, the M-03 features a rust-proof anodized aluminium alloy frame. This clinical-grade model is highly favored by sports rehabilitation centers, hospitals, and luxury resorts where cleaning cycles are frequent and humidity resistance is critical.",
    technicalSpecs: {
      "Frame Material": "Anodized Structural Aluminium Alloy",
      "Tower Material": "Polished Stainless Steel",
      "Spring System": "6 progressive carriage springs + 8 tower springs",
      "Base Dimensions": "240 x 70 x 200 cm",
      "Carriage System": "Polyurethane silent alignment guide",
      "Unit Weight": "85 kg",
    },
    faqs: [
      {
        question: "Why choose aluminium over wood for a clinical Pilates setup?",
        answer: "Aluminium is non-porous, highly resistant to medical-grade sanitizers, and completely immune to humidity, making it the industry standard for physical therapy clinics."
      },
      {
        question: "Is the resistance curve different from the wooden models?",
        answer: "No, the M-03 uses the exact same calibrated piano-wire springs and rail profile, ensuring a uniform resistance curve and glide experience."
      },
      {
        question: "How long does the Aluminium Reformer With Tower M-03 warranty last?",
        answer: "The Aluminium Reformer With Tower M-03 comes with a 3-year structural frame warranty covering manufacturing defects. Springs and upholstery have a 1-year replacement warranty."
      },
      {
        question: "What is the maximum user weight capacity?",
        answer: "The Aluminium Reformer With Tower M-03 supports a maximum user weight of 150 kg, making it suitable for all client profiles in a commercial studio environment."
      },
      {
        question: "Does the reformer require professional assembly?",
        answer: "The reformer arrives in partially assembled sections requiring 2–3 hours to fully assemble. Detailed assembly instructions are included. For bulk orders, we can arrange on-site assembly support in major cities."
      },
      {
        question: "Can I get the reformer with a custom upholstery colour?",
        answer: "Yes, we offer Charcoal Black, Studio Sage, Ivory White, Tan Brown, and Custom Shade options. Specify your preference when placing the order."
      },
      {
        question: "What cleaning and maintenance does the reformer require?",
        answer: "Weekly: wipe rails with dry microfibre cloth. Monthly: inspect spring hooks and carriage alignment. Annually: apply light machine oil to rail guides. Avoid harsh chemical cleaners on metal surfaces."
      },
      {
        question: "Is the aluminium frame corrosion resistant?",
        answer: "Yes, the structural frame is anodized, which creates a protective oxide layer, preventing rust and corrosion even in high-humidity spa or coastal locations."
      }
    ]
  },
  "foldable-reformer": {
    quickAnswer: "The Mahadev M-04 Foldable Pilates Reformer is a space-saving home-studio reformer that folds effortlessly. It includes a jumping board and reformer box, making it perfect for private home training in India.",
    detailedOverview: "Designed specifically for upscale home gyms, penthouses, and compact multi-use wellness rooms, the M-04 offers full-scale reformer functionality that folds away into a compact footprint. It features a reinforced hinge system and heavy-duty transport wheels for quick setup.",
    technicalSpecs: {
      "Frame Material": "Seasoned Solid Wood (Maple/Rubber wood)",
      "Hinge Mechanism": "Heavy-duty locking steel hinge",
      "Spring Resistance": "5 carriage springs",
      "Folded Dimensions": "115 x 69 x 75 cm",
      "Unfolded Dimensions": "230 x 69 x 58 cm",
      "Included Accessories": "Reformer Box, Jumpboard, Foot strap",
    },
    faqs: [
      {
        question: "Does the folding mechanism affect carriage stability?",
        answer: "No, the M-04 features an industrial alignment lock that secures the two halves together, creating a continuous rail surface for a smooth glide."
      },
      {
        question: "Can it be stored vertically?",
        answer: "Yes, when folded, the unit is balanced to stand securely in a vertical position to minimize floor space usage."
      },
      {
        question: "How long does the Foldable Reformer M-04 warranty last?",
        answer: "The Foldable Reformer M-04 comes with a 3-year structural frame warranty covering manufacturing defects. Springs and upholstery have a 1-year replacement warranty."
      },
      {
        question: "What is the maximum user weight capacity?",
        answer: "The Foldable Reformer M-04 supports a maximum user weight of 150 kg, making it suitable for home and commercial settings alike."
      },
      {
        question: "Does the reformer require professional assembly?",
        answer: "The reformer arrives mostly pre-assembled. You only need to attach the risers and thread the ropes, taking about 15-20 minutes."
      },
      {
        question: "Can I get the reformer with a custom upholstery colour?",
        answer: "Yes, we offer Charcoal Black, Studio Sage, Ivory White, Tan Brown, and Custom Shade options. Specify your preference when placing the order."
      },
      {
        question: "What cleaning and maintenance does the reformer require?",
        answer: "Weekly: wipe rails with dry microfibre cloth. Monthly: inspect spring hooks, hinge locking bolts, and carriage alignment. Avoid harsh chemical cleaners on wood surfaces."
      },
      {
        question: "What accessories are included in the package?",
        answer: "The M-04 Foldable Reformer package comes complete with a padded Reformer Box, a jumping board, carriage straps, and handles."
      }
    ]
  },
  "the-cadillac": {
    quickAnswer: "The Mahadev M-05 Pilates Cadillac Trapeze Table is a premium rehabilitation and advanced training powerhouse. It features a solid wood base and a full stainless steel canopy overhead frame with an extensive spring and trapeze kit.",
    detailedOverview: "The Cadillac represents the ultimate Pilates training platform. Built on a massive solid maple base, it features a 304-grade stainless steel overhead canopy structure. It comes equipped with a push-through bar, roll-back bar, trapeze swing, safety strap, and a comprehensive spring set for advanced spinal decompression, core stability, and athletic conditioning.",
    technicalSpecs: {
      "Base Material": "Solid Maple Wood",
      "Canopy Material": "304-Grade Stainless Steel",
      "Mat Upholstery": "High-density polyurethane foam with heavy-duty vinyl",
      "Dimensions": "217 x 69 x 205 cm",
      "Spring Count": "12 clinical-grade springs with various resistance levels",
      "Max User Weight": "180 kg",
    },
    faqs: [
      {
        question: "What is the primary use of a Pilates Cadillac?",
        answer: "The Cadillac is widely used for rehabilitation, spinal alignment, assisted stretching, and advanced acrobatic training due to its stable table base and overhead frame."
      },
      {
        question: "Does it come with all the attachments shown?",
        answer: "Yes, the M-05 includes the complete accessory kit: trapeze bar, push-through bar, sheepskin fuzzy loops, roll-back bar, and all corresponding springs."
      },
      {
        question: "What is the maximum height and overhead clearance needed?",
        answer: "The Cadillac is 205 cm tall. We recommend a minimum ceiling height of 240 cm (8 feet) to allow comfortable overhead clearances for spring work."
      },
      {
        question: "How many attachment points does the Cadillac frame have?",
        answer: "The stainless steel canopy frame has 14 distinct attachment points for leg springs, arm springs, push-through bar, and the trapeze canopy."
      },
      {
        question: "What rehabilitation conditions is the Cadillac most used for?",
        answer: "It is widely used for physical therapy, post-surgical rehabilitation, spinal decompression, scoliosis correction, and restoring joint range of motion."
      },
      {
        question: "Can the Cadillac be used without a therapist present?",
        answer: "Basic exercises can be done solo, but advanced spring and trapeze movements should be performed under the supervision of a certified Pilates instructor or physiotherapist."
      },
      {
        question: "Is the spring bar adjustable in height?",
        answer: "Yes, the spring slider bar on the canopy can be adjusted vertically to alter the angle and resistance curve of the attachments."
      },
      {
        question: "What is the overhead clearance needed for the Cadillac?",
        answer: "We recommend at least 35-40 cm of overhead clearance above the canopy structure for safety and proper spring extension."
      }
    ]
  },
  "3-in-1-caformer": {
    quickAnswer: "The Mahadev M-06 3-in-1 Caformer is a premium reformer, Cadillac, and mat hybrid system. It is our most versatile apparatus, enabling seamless transitions between three distinct training modalities on a single footprint.",
    detailedOverview: "The M-06 Caformer represents the peak of space efficiency and versatility for premium studios. By integrating a sliding reformer carriage with a full Cadillac overhead canopy and a drop-in mat conversion system, it allows instructors to conduct reformer, Cadillac, and mat classes without needing multiple pieces of heavy equipment.",
    technicalSpecs: {
      "Frame Material": "Seasoned North American Maple Wood",
      "Overhead Canopy": "304-grade stainless steel tubes",
      "Carriage Springs": "6 calibrated springs",
      "Tower Springs": "8 attachment springs",
      "Conversion Type": "Split-mat drop-in inserts",
      "Total Weight": "165 kg",
      "Dimensions": "228 x 85 x 205 cm",
    },
    faqs: [
      {
        question: "How long does it take to convert the Caformer from reformer to mat mode?",
        answer: "The conversion takes less than 30 seconds. You simply slide the carriage to one end and insert the two custom split-mat panels."
      },
      {
        question: "Is it suitable for clinical rehabilitation centers?",
        answer: "Yes, the Caformer is our most popular model for clinical settings because it offers full Cadillac rehabilitation capabilities alongside standard reformer exercise programs."
      },
      {
        question: "Does the Caformer include all accessories for all three modes?",
        answer: "Yes, the M-06 includes the reformer box, jumpboard, split-mat conversion panels, roll-up bar, push-through bar, fuzzy loops, and all 14 springs."
      },
      {
        question: "How long does it take to transition between modes?",
        answer: "It takes under 30 seconds to convert the Caformer from reformer to Cadillac or mat mode by dropping in the split-mat panels."
      },
      {
        question: "What is the weight of the 3-in-1 Caformer?",
        answer: "The Caformer weighs approximately 165-169 kg due to its heavy-duty solid maple base and stainless steel canopy, providing ultimate stability."
      },
      {
        question: "Is the Caformer suitable for commercial studio daily use?",
        answer: "Yes, it is built with solid wood joins and industrial-grade bearings, designed to handle 8-10 commercial sessions daily."
      },
      {
        question: "What is the floor space requirement for the 3-in-1 Caformer?",
        answer: "We recommend a clear space of 2.8 x 1.8 meters for safe and unrestricted movement in reformer and Cadillac modes."
      },
      {
        question: "Does it come with a warranty?",
        answer: "Yes, it comes with a 3-year structural frame warranty and a 1-year warranty on springs, straps, and upholstery."
      }
    ]
  },
  "ladder-barrel": {
    quickAnswer: "The Mahadev M-07 Pilates Ladder Barrel is engineered for spinal flexibility, core conditioning, and deep stretching. It features an adjustable sliding base, reinforced maple rungs, and high-density foam padding.",
    detailedOverview: "Our M-07 Ladder Barrel targets core stability, spinal decompression, and flexibility. The solid maple frame connects a 6-rung ladder to a barrel arc via a smooth sliding track. This adjustable base accommodates users of different heights and torso lengths, allowing for safe, progressive stretching and alignment exercises.",
    technicalSpecs: {
      "Frame Material": "Solid Maple Wood",
      "Ladder Rungs": "6 reinforced hardwood rungs",
      "Sliding System": "Dual-track manual slide with locking lever",
      "Dimensions": "112 x 63 x 89 cm",
      "Upholstery": "High-density EVA foam with commercial vinyl",
      "Unit Weight": "35 kg",
    },
    faqs: [
      {
        question: "What is the benefit of using a Ladder Barrel?",
        answer: "It is excellent for opening the thoracic spine, strengthening the back extensors, stretching the hamstrings, and enhancing lateral core stability."
      },
      {
        question: "How does the sliding adjustment work?",
        answer: "A quick-release locking handle allows the barrel base to slide closer or further from the ladder, adapting to different leg lengths."
      },
      {
        question: "What is the adjustable range of the sliding base?",
        answer: "The sliding base can be adjusted over a 30 cm range, letting you customize the distance between the ladder and the barrel for users from 150 cm to 195 cm tall."
      },
      {
        question: "How many exercises can be performed on the ladder barrel?",
        answer: "Over 50 classical and contemporary Pilates exercises can be performed on the ladder barrel, focusing on core strength, spinal flexibility, and active stretching."
      },
      {
        question: "Is the barrel foam removable for cleaning?",
        answer: "The high-density EVA foam is wrapped in a durable commercial-grade vinyl cover that cannot be removed but is easily sanitized using alcohol-free anti-bacterial wipes."
      },
      {
        question: "What is the rung spacing on the ladder?",
        answer: "The ladder has 6 rungs spaced exactly 12 cm apart, providing multiple secure hand and foot positioning options for various flexibility ranges."
      },
      {
        question: "Can the ladder barrel be used for yoga as well as Pilates?",
        answer: "Yes, it is widely used by yoga practitioners for passive back bends, shoulder opening, and assisted hamstring stretching."
      },
      {
        question: "Does it carry the same 3-year warranty?",
        answer: "Yes, all our major wooden structural apparatus, including the M-07 Ladder Barrel, are covered by our 3-year structural frame warranty."
      }
    ]
  },
  "wunda-chair": {
    quickAnswer: "The Mahadev M-08 Maple Wunda Chair is a compact balance and strength-building tool. It features adjustable spring tension, a split-pedal option, and removable handles, ideal for full-body conditioning.",
    detailedOverview: "The M-08 Wunda Chair delivers advanced core and lower-body strength work on a very small footprint. Built with a solid maple cabinet, it features a split-pedal design that allows for reciprocal arm and leg movements. The spring-loaded pedal has 4 resistance slots per spring, allowing for easy tension adjustments.",
    technicalSpecs: {
      "Cabinet Material": "Solid Maple Wood",
      "Pedal System": "Split-pedal with locking pin (converts to single pedal)",
      "Spring Count": "2 heavy-duty chair springs",
      "Resistance Slots": "4 slots per spring for micro-adjustments",
      "Handles": "Removable, height-adjustable stainless steel handles",
      "Dimensions": "79 x 65 x 60 cm",
    },
    faqs: [
      {
        question: "What does the split-pedal feature do?",
        answer: "The split-pedal allows independent movement of each leg, which is ideal for correcting muscular imbalances, rehabilitation work, and rotational conditioning."
      },
      {
        question: "Are the handles removable?",
        answer: "Yes, the handles can be completely removed using the quick-release knobs on the sides of the cabinet."
      },
      {
        question: "How many pedal configurations does the Wunda Chair support?",
        answer: "It supports both single-pedal and split-pedal configurations. You can lock them together using a steel pin for bilateral work, or unlock them for reciprocal movement."
      },
      {
        question: "What spring resistance levels are available?",
        answer: "The chair is equipped with 2 heavy-duty springs that can be attached to 4 different hook heights, providing a total of 8 resistance level combinations."
      },
      {
        question: "Can the handles be used independently or only together?",
        answer: "The removable stainless steel stability handles are inserted into separate sockets and can be adjusted to different heights or removed entirely."
      },
      {
        question: "Is the Wunda Chair suitable for group classes?",
        answer: "Yes, its compact footprint (around 79 x 65 cm) makes it ideal for group class studio layouts where space is at a premium."
      },
      {
        question: "What is the recommended studio space for the Wunda Chair?",
        answer: "We recommend a footprint of 1.5 x 1.5 meters of clear space around the Wunda Chair to allow clients to perform full-range exercises safely."
      },
      {
        question: "What is the frame warranty on the Wunda Chair?",
        answer: "The M-08 Maple Wunda Chair includes our signature 3-year structural frame warranty. Springs and loops carry a 1-year warranty."
      }
    ]
  },
  "aluminium-wunda-chair": {
    quickAnswer: "The Mahadev M-09 Aluminium Wunda Chair is a commercial-strength, clinical-grade balance chair. It features a corrosion-resistant aluminium frame and a multi-slot spring system for postural control.",
    detailedOverview: "Designed for commercial fitness clubs and rehabilitation environments, the M-09 offers a rust-proof structural aluminium body. It features removable stability handles and a split-pedal mechanism, delivering durable postural and balance training in a clean, contemporary design.",
    technicalSpecs: {
      "Frame Material": "Structural Anodized Aluminium",
      "Pedal Configuration": "Dual split-pedal with locking bar",
      "Springs": "2 heavy-duty tension springs",
      "Dimensions": "80 x 70 x 130 cm",
      "Unit Weight": "45 kg",
      "Handles": "Removable stainless steel bars",
    },
    faqs: [
      {
        question: "Is the aluminium chair more durable than the maple wood chair?",
        answer: "Both chairs are built for heavy commercial use. The aluminium model is preferred in modern high-humidity spaces or clinical environments due to its easy cleaning and corrosion resistance."
      },
      {
        question: "How many pedal configurations does the Aluminium Wunda Chair support?",
        answer: "It supports both single-pedal and split-pedal configurations. You can lock them together using a steel pin for bilateral work, or unlock them for reciprocal movement."
      },
      {
        question: "What spring resistance levels are available?",
        answer: "The chair is equipped with 2 heavy-duty springs that can be attached to 4 different hook heights, providing a total of 8 resistance level combinations."
      },
      {
        question: "Can the handles be used independently or only together?",
        answer: "The removable stainless steel stability handles are inserted into separate sockets and can be adjusted to different heights or removed entirely."
      },
      {
        question: "Is the Aluminium Wunda Chair suitable for group classes?",
        answer: "Yes, its compact footprint (around 80 x 70 cm) makes it ideal for group class studio layouts where space is at a premium."
      },
      {
        question: "What is the recommended studio space for the Aluminium Wunda Chair?",
        answer: "We recommend a footprint of 1.5 x 1.5 meters of clear space around the Aluminium Wunda Chair to allow clients to perform full-range exercises safely."
      },
      {
        question: "What cleaning and maintenance does the chair require?",
        answer: "Simply wipe the metal frame and vinyl upholstery down with a damp cloth and mild soap or non-alcohol antibacterial sanitizing wipes after each session."
      },
      {
        question: "Does it come with a warranty?",
        answer: "Yes, the M-09 Aluminium Wunda Chair comes with a 3-year structural frame warranty and a 1-year warranty on springs and pads."
      }
    ]
  },
  "aluminium-ladder-barrel": {
    quickAnswer: "The Mahadev M-10 Aluminium Ladder Barrel provides modern spinal conditioning in a sleek, lightweight, and rust-proof design. It features a sliding adjustment base and a durable high-density arc.",
    detailedOverview: "Our M-10 features an anodized aluminium framework supporting a classic wooden ladder profile. This hybrid design offers the durability and weight-savings of modern alloys with the warmth and tactile feel of natural wood rungs, providing a contemporary aesthetic for high-end boutique clubs.",
    technicalSpecs: {
      "Structure Material": "Anodized Aluminium Alloy",
      "Ladder Material": "Imported Hardwood Rungs",
      "Base Type": "Manual sliding guide with locking knob",
      "Dimensions": "120 x 90 x 100 cm",
      "Unit Weight": "42 kg",
    },
    faqs: [
      {
        question: "Does the aluminium base slide smoothly?",
        answer: "Yes, the aluminium base slides on low-friction linear tracks, making adjustments faster and easier than traditional all-wood models."
      },
      {
        question: "What is the adjustable range of the sliding base?",
        answer: "The sliding base can be adjusted over a 30 cm range, letting you customize the distance between the ladder and the barrel for users from 150 cm to 195 cm tall."
      },
      {
        question: "How many exercises can be performed on the ladder barrel?",
        answer: "Over 50 classical and contemporary Pilates exercises can be performed on the ladder barrel, focusing on core strength, spinal flexibility, and active stretching."
      },
      {
        question: "Is the barrel foam removable for cleaning?",
        answer: "The high-density EVA foam is wrapped in a durable commercial-grade vinyl cover that cannot be removed but is easily sanitized using alcohol-free anti-bacterial wipes."
      },
      {
        question: "What is the rung spacing on the ladder?",
        answer: "The ladder has 6 rungs spaced exactly 12 cm apart, providing multiple secure hand and foot positioning options for various flexibility ranges."
      },
      {
        question: "Can the ladder barrel be used for yoga as well as Pilates?",
        answer: "Yes, it is widely used by yoga practitioners for passive back bends, shoulder opening, and assisted hamstring stretching."
      },
      {
        question: "Does it carry the same 3-year warranty?",
        answer: "Yes, the M-10 Aluminium Ladder Barrel includes our signature 3-year structural frame warranty. Wooden rungs and padding have a 1-year replacement warranty."
      },
      {
        question: "What cleaning and maintenance does it require?",
        answer: "Simply wipe the metal base, wood rungs, and vinyl upholstery down with a damp cloth and mild soap or non-alcohol antibacterial sanitizing wipes after each session."
      }
    ]
  },
  "spine-corrector": {
    quickAnswer: "The Mahadev M-11 Pilates Spine Corrector is a portable posture alignment and back relief tool. Crafted from maple wood, it features a high-density foam arc to support chest opening and decompression.",
    detailedOverview: "The M-11 Spine Corrector is an essential accessory for both home and studio use. Shaped as a step and a curved arc, it supports the spine during flexion, extension, and lateral bending, helping to correct forward-head posture, relieve lower back tension, and increase shoulder mobility.",
    technicalSpecs: {
      "Base Construction": "Layered Maple Plywood",
      "Arc Padding": "High-density EVA foam",
      "Upholstery": "Sweat-resistant commercial vinyl",
      "Dimensions": "95 x 45 x 34 cm",
      "Unit Weight": "11 kg",
      "Handles": "Dual cutout side handles for easy transport",
    },
    faqs: [
      {
        question: "How does the spine corrector help with posture?",
        answer: "It supports the spine's natural curvature during extension exercises, opening up the chest and shoulders to counteract slouching from sitting at desks."
      },
      {
        question: "Is it suitable for home fitness?",
        answer: "Yes, it is lightweight, portable, and requires no setup, making it one of the most accessible pieces of Pilates apparatus for home stretching."
      },
      {
        question: "How does the Spine Corrector help with posture correction?",
        answer: "It supports the thoracic spine's extension, reversing slouching, opening the chest and shoulders, and strengthening core alignment."
      },
      {
        question: "Can the Spine Corrector be used at home?",
        answer: "Yes, its compact, lightweight design (11 kg) and side handles make it highly portable and easy to store in a home wellness space."
      },
      {
        question: "What exercises are most common on the Spine Corrector?",
        answer: "Common exercises include roll-downs, chest openers, side bends, leg series, and spinal articulation curls."
      },
      {
        question: "Is the Spine Corrector suitable for Pilates beginners?",
        answer: "Yes, it provides excellent lumbar support, making it easier for beginners to perform core and spinal movements without strain."
      },
      {
        question: "What is the weight of the Spine Corrector — is it portable?",
        answer: "It weighs 11 kg and features convenient cutout side handles, making it easy to carry and move around."
      },
      {
        question: "How do you clean the upholstery?",
        answer: "Simply wipe the vinyl cover down with a damp cloth and mild soap or non-alcohol antibacterial sanitizing wipes after each use."
      }
    ]
  }
};
