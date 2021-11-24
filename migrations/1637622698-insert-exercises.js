const exercises = [
  {
    id: 1,
    title: 'Plank',
    description: `1. Get into a push up position, with your elbows under your shoulders and     your feet hip-width apart.
      2. Bend your elbows and rest your weight on your forearms and on your toes, keeping your body in a straight line.
      3. Hold for as long as possible.`,
    benefits:
      'Adding the plank to your workout routine helps you develop core strength and flexibility. This exercise tones the abs, trims down the waist and, since the plank engages and strengthens your entire core, it also improves your posture and helps to reduce back pain.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637154257/next_pwa/plank-exercise-illustration_nhrmmg.gif',
    bodyPart: 'cardio',
  },
  {
    id: 2,
    title: 'Superman',
    description: `1. Lie on your belly, with your arms and legs fully extended.
    2. Lift both arms and legs off the floor, and hold for a count of 2.
    3. Return to the starting position and repeat.`,
    benefits:
      'The superman targets your lower and middle back and helps to strengthen your core. This exercise also improves your posture and flexibility and stretches your upper body.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637173807/next_pwa/superman-exercise-illustration-spotebi_ls28vl.gif',
    bodyPart: 'back',
  },
  {
    id: 3,
    title: 'Bodyweight squats',
    description: `1. Stand up with your feet shoulder-width apart.
    2. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees.
    3. Press your heels into the floor to return to the initial position.
    4. Repeat until set is complete.`,
    benefits:
      'Squats are a great exercise to tone the legs and the glutes and to strengthen the knee muscles. If done regularly, you can expect to see improvements in both your flexibility and balance. Squats are also great for getting the blood pumping through the entire body, thus promoting circulation, removing waste, and reducing cellulite.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431736/next_pwa/squat-exercise-illustration_ejspqg.gif',
    bodyPart: 'legs',
  },
  {
    id: 4,
    title: 'Forward and reverse lunges',
    description: `1. Stand with your feet hip-width apart, take a step forward and then slowly bend both knees until your back knee is just above the floor.
    2. Stand back up, take a step back with the same leg, and bend both knees until your back knee is just above the floor.
    3. Repeat this back and forth movement for the entire duration of the set, and then switch legs.`,
    benefits:
      'The front and back lunge is a very effective lower body exercise that helps to tone and sculpt your glutes and thighs. This move also improves the flexibility of the hips and increases your balance and stability.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/front-and-back-lunges-exercise-illustration-spotebi_rwjo0a.gif',
    bodyPart: 'legs',
  },
  {
    id: 5,
    title: 'Push-ups',
    description: `1. With your legs extended back, place the hands below the shoulders, slightly wider than shoulder-width apart.
    2. Start bending your elbows and lower your chest until it’s just above the floor.
    3. Push back to the starting position. A 1-second push, 1-second pause, 2-second down count is ideal.
    4. Repeat.`,
    benefits:
      'Adding push-ups to your workout routine helps to shape and tone your shoulders, triceps and glutes, strengthens the chest, and helps to tone and tighten your core.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/push-up-exercise-illustration_vslont.gif',
    bodyPart: 'chest',
  },
  {
    id: 6,
    title: 'Jump squats',
    description: `1. Stand with your feet shoulder-width apart and the toes pointing slightly outward.
    2. Bend your knees pressing your hips back as if you were going to sit back on a chair.
    3. Pushing through the heels, jump straight up.
    4. Land with your knees slightly bent and go back into the squat position.
    5. Repeat until the set is complete.`,
    benefits:
      'The jump squat is a high-impact, full body exercise that you can add to your cardio routine to help build strength, speed and increase aerobic fitness. This exercise activates your lower body and helps to tone your legs and glutes.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431765/next_pwa/jump-squat-exercise-illustration_zzpulg.gif',
    bodyPart: 'legs',
  },
  {
    id: 7,
    title: 'Decline Push Ups',
    description: `1. Start in a plank position, with your wrists under your shoulders and your feet hip-width apart, and place your feet on top of a step.
    2. Bend your elbows and lower your chest until it’s just above the floor.
    3. Push back to the starting position, and repeat until the set is complete.`,
    benefits:
      'The decline push up targets the pec muscles and helps to lift your breasts and strengthen your chest. This exercise also shapes and tones your shoulders, triceps, and back, and helps to improve core strength and stability.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/decline-push-up-exercise-illustration-spotebi_unjtcj.gif',
    bodyPart: 'chest',
  },
  {
    id: 8,
    title: 'Kettlebell/Dumbbell swings',
    description: `1. Stand with your feet shoulder-width apart, your toes pointed slightly outward, and hold a dumbbell/kettlebell in your right hand.
    2. Squat and bring the dumbbell/kettlebell between your legs.
    3. Stand up, swing the dumbbell/kettlebell up to about chest height, and switch it to your left hand.
    4. Return to the squat position, and keep alternating hands for the duration of the set.`,
    benefits:
      'The dumbbell/kettlebell swing targets your glutes and thighs and helps to improve lower body strength and endurance. This exercise also works your core, legs, and shoulders, and gives you a great cardio boost.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/alternating-dumbbell-swing-exercise-illustration-spotebi_p3s16l.gif',
    bodyPart: 'cardio',
  },
  {
    id: 9,
    title: 'Pistol Squats',
    description: `1. Stand up straight with your feet hip-width apart and lift your left leg in front of you.
    2. Start bending your right knee and slowly lower your hips back.
    3. Push through the right heel to return to the starting position.
    4. Switch to the left side and repeat.`,
    benefits:
      'The pistol squat is an advanced move that tones and builds your lower body and corrects muscle imbalances. Since this exercise requires core support and posture alignment, it also challenges and strengthens the core and improves both stability and coordination.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/pistol-squat-exercise-illustration_qarkk9.gif',
    bodyPart: 'legs',
  },
  {
    id: 10,
    title: 'Jump rope',
    description: `1. Hold the rope while keeping your hands at hip level.
    2. Rotate your wrists to swing the rope and jump.
    3. Jump with both feet at the same time, one foot at a time, alternating between feet, etc.
    4. Repeat until the set is complete.`,
    benefits:
      'The jump rope is the perfect cardio exercise. It warms up the body, strengthens the muscles, increases aerobic fitness, and burns a lot of calories in a short period of time. Jumping rope can also improve speed, coordination, agility, and balance.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431765/next_pwa/jump-rope-exercise-illustration_n39qam.gif',
    bodyPart: 'cardio',
  },
  {
    id: 11,
    title: 'Crunches',
    description: `1. Lie down on your back, keep your knees bent, and your back and feet flat on the mat.
    2. Slowly lift your torso and sit up.
    3. Return to the starting position by rolling down one vertebra at a time.
    4. Repeat the exercise until set is complete.`,
    benefits:
      'Including sit ups in your workout routine helps to sculpt and tone your abdomen and trims down your waist. Both the sit up and the crunch target your abs and, because sit ups involve a greater range of movement, they also work your hip flexors, chest, and legs.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/crunches-exercise-illustration_mv6fi2.gif',
    bodyPart: 'cardio',
  },
  {
    id: 12,
    title: 'Squat Thrust ',
    description: `1. Stand straight with your feet shoulder-width apart.
    2. Squat and place your hands in front of your feet.
    3. Jump back and get into a push-up position.
    4. Jump again, bringing the legs toward your palms, and stand up.
    5. Repeat until the set is complete.`,
    benefits:
      'The squat thrust is a complete exercise that works the entire body. It increases the heart rate, boosts metabolism, and improves both agility and strength. It’s also a great exercise for losing weight and improving cardiovascular endurance.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/squat-thrust-exercise-illustration_uhsypb.gif',
    bodyPart: 'legs',
  },
  {
    id: 13,
    title: 'Bulgarian split squats',
    description: `1. Place a step or a box behind you and stand up tall.
    2. Position your right foot on top of the step, bend your knees and lower the hips until your left thigh is parallel to the floor.
    3. Return to the starting position and repeat.
    4. Switch legs.`,
    benefits:
      'The bulgarian split squat is a great exercise to improve your balance and knee stability, and also to target your posterior chain muscles, hamstrings and glutes. If you want to lift your butt, this is definitely one of the best exercises you can do. Pair it with sumo squats and romanian deadlifts and you’ll have a round and firm booty in no time!',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/bulgarian_squat_h8cpaz.jpg',
    bodyPart: 'legs',
  },
  {
    id: 14,
    title: 'Donkey kicks',
    description: `1. Get down on all fours and position your hands under your shoulders and your knees under your hips.
    2. Kick back with one leg and squeeze the glutes.
    3. Bend the knee, lower the leg, and repeat.
    4. Switch legs.`,
    benefits:
      'Donkey kicks are a simple but effective exercise that targets the glutes and helps to tone, tighten and strengthen your buttocks. To give your glutes a great workout, combine a set of donkey kicks with a set of fire hydrants.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/donkey-kicks-exercise-illustration_wkdure.gif',
    bodyPart: 'legs',
  },
  {
    id: 15,
    title: 'Burpees',
    description: `1. Stand straight with your feet shoulder-width apart.
    2. Squat and place your hands in front of your feet.
    3. Jump back until your legs are fully extended and your body is in plank position.
    4. Do a push up, jump forward, and then push through the heels to return to the starting position.
    5. Repeat until the set is complete.`,
    benefits:
      'Burpees are an intense full body exercise that increases heart rate, strength, agility, and flexibility. This exercise is one of the most complete since it uses all major muscle groups and burns a ton of calories in a short period of time.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/burpees-exercise-illustration_jw82ma.gif',
    bodyPart: 'cardio',
  },
  {
    id: 16,
    title: 'Jumping lunges',
    description: `1. With your legs extended back, place the hands below the shoulders, slightly wider than shoulder-width apart.
    2. Start bending your elbows and lower your chest until it’s just above the floor.
    3. Push back to the starting position. A 1-second push, 1-second pause, 2-second down count is ideal.
    4. Repeat.`,
    benefits:
      'Adding push-ups to your workout routine helps to shape and tone your shoulders, triceps and glutes, strengthens the chest, and helps to tone and tighten your core.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637432544/next_pwa/jumping-lunges-exercise-illustration_qlqqvy.gif',
    bodyPart: 'cardio',
  },
  {
    id: 17,
    title: 'Pull-ups',
    description: `1. Start with your hands on the bar approximately shoulder-width apart with your palms facing forward.
    2. With arms extended above you, stick your chest out and curve your back slightly. That is your starting position.
    3. Pull yourself up towards the bar using your back until the bar is at chest level while breathing out.
    4. Slowly lower yourself to the starting position while breathing in. That is one rep.`,
    benefits:
      'The primary benefits of the pull-up are increasing strength and definition of the upper arms, specifically the biceps, the posterior deltoids of the shoulders and the teres major and latissimus dorsi muscles of the back.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/pullups_wkkgrx.jpg',
    bodyPart: 'arms',
  },
  {
    id: 18,
    title: 'Bent-over barbell rows',
    description: `1. Hold onto a barbell with your palms facing down. Bend your knees slightly and bend forward at the waist while keeping your back straight. It should be almost parallel with the floor. The barbell should be directly in front of you; your arms should be perpendicular to the floor. This is the starting position.
    2. While keeping your torso stationary, lift the barbell toward you. Your elbows should be kept close to your body. Use only your forearms to hold the weight. When you get to the top, squeeze your back muscles and hold for a few seconds.
    3. Slowly lower the barbell back to the starting position.
    4. Repeat the process for the number of repetitions in your workout routine.`,
    benefits:
      'The bent-over barbell row, specifically with a barbell, is one of the best strength- and muscle-building movements. It allows the lifter to use more weight relative to other rowing movements. It also recruits the forearm and biceps muscles, which leads to a stronger grip.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/barbell_rows_kk53pf.jpg',
    bodyPart: 'back',
  },
  {
    id: 19,
    title: 'Military Press',
    description: `1. Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other.
    Slightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other.
    2. Once you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.
    3. Lower the bar down to the collarbone slowly as you inhale.
    4. Lift the bar back up to the starting position as you exhale.`,
    benefits:
      'The military press is one of the best exercises for developing almost every major muscle group in your body, including your shoulders, upper chest, triceps, and core, and even your glutes, biceps, and lats to a lesser degree.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/barbell_press_ukmknw.jpg',
    bodyPart: 'shoulders',
  },
  {
    id: 20,
    title: 'Dips',
    description: `1. Place your hands behind you onto a chair, so that your fingers face forward.
    2. Extend your legs and start bending your elbows.
    3. Lower your body until your arms are at a 90-degree angle.
    4. Lift your body back up until your arms are straight.`,
    benefits:
      'Dips are a great exercise to tighten your triceps and to help you get rid of flabby arms quickly. Usually, the triceps don’t get worked as much as they should and that’s why it’s important to exercise those muscles regularly so that they don’t get loose and saggy.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/tricep-dips-exercise-illustration-spotebi_gcpozm.gif',
    bodyPart: 'arms',
  },
  {
    id: 21,
    title: 'Skullcrusher',
    description: `1. Lie down on a bench or the floor holding a pair of dumbbells directly above your chest with your palms facing each other. Your feet should be flat on the floor.
    2. Without moving your upper arms, bend your elbows and slowly lower the weights toward the sides of your head. Avoid flaring your elbows.`,
    benefits:
      'The skull crusher is an accessory movement to increase triceps strength and hypertrophy. This can also help increase injury resistance for the elbow joint and improve overall elbow extension abilities necessary for sports performance.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431761/next_pwa/skullcrusher_ermbre.jpg',
    bodyPart: 'arms',
  },
  {
    id: 22,
    title: 'Bicep Curls',
    description: `1. Stand straight with a dumbbell in each hand, your feet shoulder-width apart, and hands by your sides.
    2. Squeeze the biceps and lift the dumbbells.
    3. Once the dumbbells are at shoulder level, slowly lower the arms to the starting position.
    4. Repeat.`,
    benefits:
      'Curls work the biceps muscles at the front of the upper arm, and also the muscles of the lower arm—the brachialis and brachioradialis. You use these muscles anytime you pick something up, which is common throughout daily life. Doing the standing arm curl, you build strength in the upper arm and learn to use your arm muscles correctly, bracing with your core muscles. ',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/bicep_curls_u3xnpz.jpg',
    bodyPart: 'arms',
  },
  {
    id: 23,
    title: 'Deadlifts',
    description: `1. Stand with your mid-foot under the barbell.
    2. Bend over and grab the bar with a shoulder-width grip.
    3. Bend your knees until your shins touch the bar.
    4. Lift your chest up and straighten your lower back.
    5. Take a big breath, hold it, and stand up with the weight.
    6. Hold the weight for a second at the top, with locked hips and knees. Then return the weight to the floor by moving your hips back while bending your legs. `,
    benefits:
      'Deadlifting can increase core strength, core stability and improve your posture. Deadlifting trains most of the muscles in the legs, lower back and core. These are all muscles responsible for posture, which will help keep your shoulders, spine, and hips in alignment.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/deadlift_lpxzax.jpg',
    bodyPart: 'back',
  },
  {
    id: 24,
    title: 'Calf Raise',
    description: `1. Stand with your torso upright, your feet hip-width apart, and your toes pointing forward.
    2. Raise your heels off the floor and squeeze your calves.
    3. Return to the starting position, by slowly lowering your heels, and repeat.`,
    benefits:
      'Calf raises are an easy and effective exercise that you can use to target the muscles on the back of the lower legs. This exercise increases the strength of your calves, allowing you to jump higher, and improves the tone, definition, and appearance of your lower legs.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/calf-raises-exercise-illustration_i0rexa.gif',
    bodyPart: 'legs',
  },
  {
    id: 25,
    title: 'Lat Pull Down',
    description: `1. Position yourself at a lat pulldown machine so that your thighs are under the leg pads.
    2. Grasp the bar with your arms fully extended, palms facing forward, and your hands wider than shoulder width apart.
    3. Curve your back approximately 30 degrees and protrude your chest. This is your starting position.
    4. Exhale as you lower the bar straight down to your chest.
    5. Contract your back muscles for a moment and then inhale as you reverse the motion back to the starting position.`,
    benefits:
      'The lat pulldown is a fantastic exercise to strengthen the latissimus dorsi muscle, the broadest muscle in your back, which promotes good postures and spinal stability. Form is crucial when performing a lat pulldown to prevent injury and reap the best results.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/pulldown_p9zokk.jpg',
    bodyPart: 'back',
  },
  {
    id: 26,
    title: 'Leg Extension',
    description: `1. Choose your weight and sit on the leg extension machine.
    2. Hook your feet under the foot pads of the lever with the pads resting just above your ankles.
    3. Exhale as you lift the lever forwards and upwards by straightening your legs until they are fully extended.
    4. Inhale as you return the lever to the starting position by bending your knees.`,
    benefits:
      'Leg extensions are a key exercise in strengthening the patellar ligament and quadriceps attachment for the knee. This exercise focuses on strengthening the quad alone and, therefore, strengthens key attachments for the knee joint at the same time.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/legextension_mhwbpr.jpg',
    bodyPart: 'legs',
  },
  {
    id: 27,
    title: 'Leg Press',
    description: `1. Brace your abdominal muscles and push the platform away with your heels and forefoot. Your heels should remain flat on the footplate. The front of your foot or toes should never be used exclusively to move the pad forward.
    2. While exhaling, extend your legs and keep your head and back flat against the seat pad. Extend with slow control rather than with an explosive movement.
    3. Pause at the top of the movement. Do not lock out your knees and ensure that they are not bowing out or in.
    4. While inhaling, return the footplate to the starting position by gradually bending the knees. Keep the feet and back flat throughout.`,
    benefits: `The leg press, a type of resistance training exercise, is an excellent way to strengthen your legs. Like all strength training exercises, leg presses build muscle, reduce the risk of injury, and counteract age-related muscle loss.`,
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/legpress_umtc6b.jpg',
    bodyPart: 'legs',
  },
  {
    id: 28,
    title: 'Hanging Leg Raises',
    description: `1. Grab the bar with an overhand grip, your thumbs wrapped around the bar to improve stability.
    2.  Once you're hanging, tense up the mid section. While keeping your legs straight, raise your them up slowly. You should raise your legs are high as possible.
    3. Pause for a second, and slowly lower your legs back to the starting position.
    4. Repeat for desired reps.`,
    benefits:
      'As well as working your lower abs, the leg raise also improves the strength and flexibility of your hips and lower back, which is a considerable benefit for anyone who spends a lot of time sitting at a desk.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/legraise_jpfnji.jpg',
    bodyPart: 'cardio',
  },
  {
    id: 29,
    title: 'Kick crunch',
    description: `1. Stand tall with your feet shoulder-width apart.
    2. Lift your left leg as high as you can, and touch your left foot with your right hand.
    3. Return to the initial position and repeat on the opposite side.
    4. Continue alternating sides, in a fast-paced move, until the set is complete.`,
    benefits:
      'The kick crunch warms up the legs, core, and glutes, improves flexibility and boosts your heart rate. This exercise also increases lower body and core strength and helps you burn extra calories.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637433129/next_pwa/kick-crunch-exercise-illustration-spotebi_bir0se.gif',
    bodyPart: 'cardio',
  },
  {
    id: 30,
    title: 'Ab Roll Out',
    description: `1. Place hands on the ab wheel/dumbbell just to the side of the body. Brace the core tightly with arms fully extended, and slowly roll the wheel forward until your body is parallel to the ground. Roll out as far as you can, then roll yourself back to the starting position.`,
    benefits:
      'Ab Wheel Rollouts Are a Great Way to Build Core Strength, Improve Balance and Stability. Its a full body cardio workout and it strengthens Joints and Ligaments.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/abroll_kxdk67.jpg',
    bodyPart: 'cardio',
  },
  {
    id: 31,
    title: 'Bench Press',
    description: `1. Setup. Lie on the flat bench with your eyes under the bar.
    2. Grab the bar. Put your pinky on the ring marks of your bar.
    3. Unrack. Take a big breath and unrack the bar by straightening your arms.
    4. Lower the bar. Lower it to your mid-chest while tucking your elbows 75°.
    5. Press.`,
    benefits:
      'Bench presses are an exercise that can be used to tone the muscles of the upper body, including the pectorals, arms, and shoulders. ... They also can be an effective strengthening exercise for sports like sprinting, hockey, and football.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/benchpress_lorcop.jpg',
    bodyPart: 'chest',
  },
  {
    id: 32,
    title: 'Dumbbell Lateral Raise',
    description: `1. Grab a set of dumbbells and stand straight.
    2. With your palms facing down, lift the dumbbells and raise your arms out to the sides.
    3. Once your elbows are at shoulder height, pause, and then slowly lower the arms back to the initial position.
    4. Repeat. Proper Form And Breathing Pattern.`,
    benefits:
      'Strengthening your shoulder and upper back muscles helps build strength in your rear deltoids and upper body. On an aesthetic level, strong deltoids will help your upper body look bigger, stronger, and more toned.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431765/next_pwa/lateralraise_cg3tlb.jpg',
    bodyPart: 'shoulders',
  },
  {
    id: 33,
    title: 'Seated Cable Row',
    description: `1. Sit on the platform with your knees bent and grasp the cable attachment. Position yourself with your knees slightly bent and so that you have to reach to grab the handle with outstretched arms yet without curling the lower back over.
    2. Pull the handle and weight back toward the lower abdomen while trying not to use the momentum of the row too much by moving the torso backward with the arms.
    3. Target the middle to upper back by keeping your back straight and squeezing your shoulder blades together as you row, chest out.
    4. Return the handle forward under tension to full stretch, remembering to keep that back straight even though flexed at the hips. Repeat the exercise for the desired number of repetitions.`,
    benefits:
      'Seated cable rows increase upper-body strength by activating multiple muscle groups throughout the body, including back muscles like the latissimus dorsi in your middle back, the erector spinea muscles, the rhomboids in your upper back, and the lower trapezius.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431763/next_pwa/cablerow_xpy4bd.jpg',
    bodyPart: 'back',
  },
  {
    id: 34,
    title: 'Shrugs',
    description: `1. Hold your dumbbells by your side with your palms facing inwards. Your feet should be shoulder-width apart and your core should be engaged.
    2. Raise your shoulders as high as you can by contracting your traps.
    3. Lower the dumbbells back down and repeat.`,
    benefits:
      'The dumbbell shrug is one of the best exercises for toning your upper back muscles, building big traps, and improving your posture.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/shrugs_xq7v8b.png',
    bodyPart: 'shoulders',
  },
  {
    id: 35,
    title: 'Cable cross fly',
    description: `1. Set both pulleys directly at (or slightly above) shoulder height and select the desired weight.
    2. Grasp both handles with a neutral grip and take a step forward to split the stance.
    3. Press the handles to lockout while flexing the pecs and extending the elbows.`,
    benefits:
      'The cable machine is a fantastic workout tool for any part of your body, especially your chest. There are alternatives for all dumbbell and barbell chest exercises that can be done on the cable machine that are just as good, if not better.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431764/next_pwa/cablecross_oiacqj.jpg',
    bodyPart: 'chest',
  },
  {
    id: 36,
    title: 'Standing Dumbbell Front Raise',
    description: `1. Stand with your feet about shoulder-width apart. Let your arms hang in front of you with the dumbbells in front of the thighs.
    2. Lift the weights upward while inhaling. Your arms are extended, palms facing down, with a slight bend in the elbows to reduce the stress on the joints.
    3. Pause briefly when your arms are horizontal to the floor.
    4. Lower the dumbbells to the starting position (at the thighs) with a slow and controlled motion while exhaling.`,
    benefits:
      'The front raise primarily strengthens the shoulder muscles (deltoids), but also works the upper chest (pectorals). It is an isolation exercise for shoulder flexion and can help you build strength and definition in the front and sides of your shoulders.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431765/next_pwa/frontraise_jbdzvh.jpg',
    bodyPart: 'shoulders',
  },
  {
    id: 37,
    title: 'Rope curls',
    description: `1. Grasp the rope extension with a neutral grip (thumbs facing the body).
    2. Keeping your elbows tucked in by your sides, slowly curl the rope up as far as possible.
    3. Squeeze the biceps at the top of the movement, and then slowly lower the weight back to starting position.`,
    benefits:
      'Rope curls strengthen your biceps almost better than any other biceps exercise. If youre looking to increase the size or strength of your biceps muscles, consider adding cable curls to your routine.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/ropecurls_z8pvz2.gif',
    bodyPart: 'arms',
  },
  {
    id: 38,
    title: 'Rope push downs',
    description: `1. Attach a double rope handle to the highest notch on the cable machine.
    2. Stand with one foot forward for balance and grip the rope handles while tucking in your arms to your sides.
    3. Now, push the rope down by extending your triceps and hold for 2 seconds. Do not lock out your elbows. Exhale during this portion of the exercise.
    4. Slowly, extend your forearms back up until they’re parallel to the floor. Inhale during this portion of the exercise.
    5. Repeat for the desired number of reps.`,
    benefits:
      'The triceps rope pushdown works your muscles when your arms are in a locked position. The minor amount of shoulder extension required by the move helps engage the long head of the muscle specifically, which is key for fully developing your triceps as well as improving shoulder stability.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637433631/next_pwa/rope_pulldown_cowkrk.jpg',
    bodyPart: 'arms',
  },
  {
    id: 39,
    title: 'Hammer curls',
    description: `1. Stand up straight with a dumbbell in each hand, holding them alongside you. Your palms should face your body. Keep your feet hip-width apart and engage your core to stabilize the body.
    2. Keep your biceps stationary and start bending at your elbows, lifting both dumbbells.
    3. Lift until the dumbbells reach shoulder-level, but don’t actually touch your shoulders. Hold this contraction briefly, then lower back to the starting position and repeat.`,
    benefits:
      'Hammer curls are particularly effective because they target the outer head of the biceps brachii, the brachialis and the brachioradialis while engaging additional back and chest muscles. When performed correctly, hammer curls can maximize your arm gains and help improve grip strength.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431765/next_pwa/hammercurl_gimmvf.jpg',
    bodyPart: 'arms',
  },
  {
    id: 40,
    title: 'Sprints',
    description: `After jogging to warm up, sprint as fast as you can for 15 seconds. Then, walk or jog at a slow pace for one to two minutes. Repeat this pattern for 10 to 20 minutes.`,
    benefits:
      'The benefits of sprinting are endless. It is an excellent cardiovascular exercise, it increases your stamina, burns lot of calories in a short time and moreover, it gives a boost to your metabolism so even when your workout is over, it keeps on burning calories.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431761/next_pwa/sprints_calp6i.jpg',
    bodyPart: 'cardio',
  },
  {
    id: 41,
    title: 'Preacher curls',
    description: `1. Curl the weight up, keeping your upper arms on the bench, until your forearms are vertical.
    2. Pause for a second at the top of the curl, then slowly lower the weight until your arms are fully extended once again.
    3. Count for three beats as you lower.`,
    benefits:
      'Preacher curls are a great exercise you can use to grow your biceps, brachialis, and brachioradialis the three main elbow flexors. Unlike other curls, the preacher curl deters cheating as it provides feedback to when you swing your arms as your arms will leave the bench.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431760/next_pwa/preachercurl_sz0tbv.jpg',
    bodyPart: 'cardio',
  },
  {
    id: 42,
    title: 'One Arm Tricep Extensions',
    description: `1. Hold a dumbbell in one hand directly behind your head, with your elbow bent and pointed towards the ceiling.
    2. Extend through your elbow until your arm is straight and the dumbbell is directly above you.
    3. Lower your arm back to starting position and repeat.`,
    benefits:
      'Tricep extensions are an excellent exercise to build and shape the upper posterior arm muscles. There are several varieties to try. Whenever you use your arms, your triceps come into action. Building strong arms, including the triceps, can help you become stronger and more functional in your everyday tasks.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/tricepextension_xyoudy.jpg',
    bodyPart: 'arms',
  },
  {
    id: 43,
    title: 'Tate press',
    description: `1. Sit on a flat bench with a dumbbell in each hand and rest one dumbbell on each knee. As you lie back on the bench, kick the dumbbells up into position over your chest, one at a time.
    2. Spread your legs and plant your feet flat on the floor.
    3. Inhale as you flex your elbows and slowly lower the dumbbells down toward your chest.
    4. Hold the dumbbells over your chest for a count of two. Do not allow the dumbbells to rest on your chest.
    5. Exhale as you flex your elbows and press the dumbbells back up to the starting position.`,
    benefits:
      'Because this exercise targets the triceps head primarily used during the bench press its a great way to increase your overall bench press weight. Weak triceps can be a common reason for bench press results to plateau, although most people arent aware of this.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/tatepress_z13noy.png',
    bodyPart: 'arms',
  },
  {
    id: 44,
    title: 'Back extensions',
    description: `1. Lie face down on a mat, with your legs fully extended and your hands supporting your head.
    2. Lift your torso up with the help of your back muscles.
    3. Hold for a count of 2 and return to the starting position.
    4. Repeat until set is complete.`,
    benefits:
      'Back extension exercises (sometimes also called hyperextensions) can strengthen lower back muscles. This includes the erector spinae, which supports the lower spine. Back extensions also work the muscles in your butt, hips, and shoulders. If you have low back pain, back extension exercises might provide relief.',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637431762/next_pwa/back-extensions-exercise-illustration_pnn72t.gif',
    bodyPart: 'back',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting exercises...');
  for (const exercise of exercises) {
    await sql`
      INSERT INTO exercises
        (title, description, benefits, image_url, body_part)
      VALUES
        (${exercise.title}, ${exercise.description}, ${exercise.benefits}, ${exercise.imageUrl}, ${exercise.bodyPart})
        `;
  }
};

exports.down = async function down(sql) {
  console.log('Deleting exercises...');
  for (const exercise of exercises) {
    await sql`
      DELETE FROM
        exercises
      WHERE
        title = ${exercise.title} AND description = ${exercise.description} AND benefits = ${exercise.benefits} AND image_url = ${exercise.imageUrl} AND body_part = ${exercise.bodyPart}
    `;
  }
};
