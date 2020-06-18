<?php include 'dischi.php';
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>php ajax dischi</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <header>
        </header>
        <main>
            <div class="discs">
                <?php foreach ($dischi as $disc) { ?>
                    <div class="single-disc"> <?php echo $disc ?>

                    </div>
                <?php
                } ?>
                <div class="">

                </div>

            </div>
        </main>
        <script src="../versione-ajax/main.js" charset="utf-8"></script>
    </body>
</html>
