// import todo1 from "public/images/todo1.png";
// import todo2 from "public/images/todo2.png";
// import mdEditor1 from "public/images/mdeditor1.png";
// import mdEditor2 from "public/images/mdeditor2.png";
// import fileManager1 from "public/images/filemanager1.png";
// import fileManager2 from "public/images/filemanager2.png";
// import fileSorting1 from "public/images/filesorting1.png";
// import fileSorting2 from "public/images/filesorting2.png";
// import gameDiscount1 from "public/images/gamediscount1.png";
// import gameDiscount2 from "public/images/gamediscount2.png";
// import gameDiscount3 from "public/images/gamediscount3.png";

export const products = [
  {
    href: "https://github.com/JotWaraich/GoShell",
    github: true,
    title: "GoShell",
    description:
      "A lightweight shell implemented in Go with basic file system operations and execution of external commands.",
    thumbnail: "/images/goshell1.png", // Replace with actual image paths
    images: ["/images/goshell1.png", "/images/goshell2.png"],
    stack: ["Go", "CLI"],
    slug: "goshell",
    content: (
      <div>
        <h2>💻 GoShell - A Lightweight Terminal Shell</h2>
        <p>
          GoShell is a simple and efficient terminal shell written in Go that
          supports basic file system operations and the execution of external
          commands. It mimics the functionality of popular terminal applications
          and includes commands like <code>ls</code>, <code>cd</code>,{" "}
          <code>pwd</code>, <code>touch</code>, <code>mkdir</code>, and more.
        </p>

        <h3>✨ Features</h3>
        <h4>File System Operations:</h4>
        <ul>
          <li>
            <strong>List files:</strong> <code>ls</code>
          </li>
          <li>
            <strong>Change directories:</strong> <code>cd</code>
          </li>
          <li>
            <strong>Display current directory:</strong> <code>pwd</code>
          </li>
          <li>
            <strong>Create files:</strong> <code>touch</code>
          </li>
          <li>
            <strong>Create directories:</strong> <code>mkdir</code>
          </li>
          <li>
            <strong>Remove files or directories:</strong> <code>rm</code>
          </li>
          <li>
            <strong>Copy files or directories:</strong> <code>cp</code>
          </li>
          <li>
            <strong>Move or rename files:</strong> <code>mv</code>
          </li>
          <li>
            <strong>View file content:</strong> <code>cat</code>
          </li>
        </ul>

        <h4>Utility Commands:</h4>
        <ul>
          <li>
            <strong>Display a message:</strong> <code>echo</code>
          </li>
          <li>
            <strong>Clear the terminal screen:</strong> <code>clear</code>
          </li>
          <li>
            <strong>Display file or directory stats:</strong> <code>stat</code>
          </li>
          <li>
            <strong>Change file permissions:</strong> <code>chmod</code>
          </li>
          <li>
            <strong>Manual pages for commands:</strong> <code>man</code>
          </li>
        </ul>

        <h4>External Commands:</h4>
        <p>
          GoShell supports running any external command not explicitly defined
          (e.g., <code>go</code>, <code>python</code>, <code>git</code>).
        </p>

        <h4>Interactive Shell Loop:</h4>
        <p>
          GoShell offers continuous command execution with a user-friendly
          prompt showing the current directory.
        </p>

        <h3>⚙️ How to Use</h3>
        <p>To get started with GoShell:</p>
        <ol>
          <li>Clone the repository:</li>
          <code>git clone https://github.com/JotWaraich/goshell.git</code>
          <li>Navigate to the project directory:</li>
          <code>cd goshell</code>
          <li>Build the project:</li>
          <code>go build -o goshell</code>
          <li>Run the shell:</li>
          <code>./goshell</code>
          <li>
            <strong>
              Alternatively, you can download the pre-built .exe file as a
              prerelease from the Releases tab on GitHub:
            </strong>
          </li>
          <p>
            Visit the{" "}
            <a href="https://github.com/JotWaraich/GoShell/releases">
              GoShell Releases
            </a>{" "}
            page, and download the latest .exe file.
          </p>
        </ol>

        <h3>📄 Command Reference</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>ls</code>
              </td>
              <td>Lists files and directories in the current directory.</td>
            </tr>
            <tr>
              <td>
                <code>cd</code>
              </td>
              <td>Changes the current directory.</td>
            </tr>
            <tr>
              <td>
                <code>pwd</code>
              </td>
              <td>Prints the current working directory.</td>
            </tr>
            <tr>
              <td>
                <code>touch</code>
              </td>
              <td>Creates a new empty file.</td>
            </tr>
            <tr>
              <td>
                <code>mkdir</code>
              </td>
              <td>Creates a new directory.</td>
            </tr>
            <tr>
              <td>
                <code>rm</code>
              </td>
              <td>
                Removes a file or directory. Use <code>/f</code> for force.
              </td>
            </tr>
            <tr>
              <td>
                <code>cat</code>
              </td>
              <td>Displays the content of a file.</td>
            </tr>
            <tr>
              <td>
                <code>echo</code>
              </td>
              <td>Prints a message to the screen.</td>
            </tr>
            <tr>
              <td>
                <code>clear</code>
              </td>
              <td>Clears the terminal screen.</td>
            </tr>
            <tr>
              <td>
                <code>cp</code>
              </td>
              <td>Copies a file or directory.</td>
            </tr>
            <tr>
              <td>
                <code>mv</code>
              </td>
              <td>Moves or renames a file or directory.</td>
            </tr>
            <tr>
              <td>
                <code>chmod</code>
              </td>
              <td>Changes the permissions of a file.</td>
            </tr>
            <tr>
              <td>
                <code>stat</code>
              </td>
              <td>Displays detailed information about a file or directory.</td>
            </tr>
            <tr>
              <td>
                <code>man</code>
              </td>
              <td>Displays a brief manual for a command.</td>
            </tr>
            <tr>
              <td>
                <code>exit</code>
              </td>
              <td>Exits the shell.</td>
            </tr>
          </tbody>
        </table>

        <h3>📂 Project Structure</h3>
        <ul>
          <li>
            <code>main.go</code>: Contains the implementation of the shell.
          </li>
          <li>
            <code>Commands</code>: Implemented as switch cases for easy
            extensibility.
          </li>
        </ul>

        <h3>🚀 Future Enhancements</h3>
        <ul>
          <li>
            Add support for pipes (<code>|</code>) and redirections (
            <code>&gt;</code>, <code>&gt;&gt;</code>, <code>&lt;</code>).
          </li>
          <li>Implement autocomplete for commands and paths.</li>
          <li>
            Support background tasks with <code>&</code>.
          </li>
        </ul>

        <h3>🤝 Contributing</h3>
        <p>
          Contributions are welcome! Feel free to submit a pull request or open
          an issue.
        </p>

        <h3>📄 License</h3>
        <p>
          This project is licensed under the MIT License. See the{" "}
          <code>LICENSE</code> file for details.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/JotWaraich/EatSmart",
    github: true,
    title: "EatSmart",
    description: "A nutrition-focused app built with Flutter.",
    thumbnail: "/images/EatSmartlogo.jpeg", // You can add actual images here
    images: [
      "/images/EatSmart01.png",
      "/images/EatSmart02.png",
      "/images/EatSmart03.png",
    ],
    stack: ["Flutter", "SQLite", "Dart"],
    slug: "eatsmart",
    content: (
      <div>
        <h2>🥗 EatSmart - Your Guide to Healthy Eating</h2>
        <p>
          EatSmart is a powerful nutrition-focused app, designed to help you
          make informed choices about your diet. Built using{" "}
          <strong>Flutter</strong>, the app provides features like food item
          scanning, nutritional analysis, and tracking, to assist users in
          managing their food intake and eating habits.
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>Food Scanner:</strong> Quickly scan food products to view
            their nutritional information, such as calories, protein, fats, and
            more.
          </li>
          <li>
            <strong>Track Your Diet:</strong> Keep a log of the food you eat
            daily, tracking your calorie intake and macronutrients.
          </li>
          <li>
            <strong>History and Analytics:</strong> View your eating history and
            track progress towards your fitness and health goals.
          </li>
          <li>
            <strong>Customizable Goals:</strong> Set personal health goals like
            calorie limits or specific nutrition targets, and let EatSmart help
            you stay on track.
          </li>
        </ul>

        <h3>⚙️ How it Works</h3>
        <p>
          Simply scan the barcode of a food item using your phone’s camera, and
          EatSmart will fetch and display its nutritional details. You can then
          add the item to your daily food log and monitor your intake throughout
          the day.
        </p>

        <h3>⚠️ Known Issues</h3>
        <ul>
          <li>
            Some food products might not be available in the database. Future
            updates will aim to improve the database and enhance product
            coverage.
          </li>
        </ul>

        <p>
          Try out EatSmart and share your thoughts on how we can improve the
          app. Your feedback is vital for making the app even more useful and
          user-friendly!
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/JotWaraich/C-QT-Todo",
    github: true,
    title: "C QT Todo",
    description: "A simple todo app built with C++ and QT framework.",
    thumbnail: "/images/todo1.png",
    images: ["/images/todo1.png", "/images/todo2.png"],
    stack: ["C++", "Qt"],
    slug: "todo",
    content: (
      <div>
        <h2>🚀 Alpha Release v0.1.1 is Here!</h2>
        <p>
          We are excited to announce the first alpha release of our C QT Todo
          app! Packed with essential features, this release aims to provide a
          seamless experience for managing your files and directories.
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>File Navigation:</strong> Effortlessly browse through your
            drives and directories with a user-friendly interface.
          </li>
          <li>
            <strong>File Operations:</strong> Perform essential operations like
            open, copy, cut, paste, delete, and rename files with ease.
          </li>
          <li>
            <strong>Create Files:</strong> Quickly create new files in various
            formats directly from the app.
          </li>
          <li>
            <strong>Handy Shortcuts:</strong> Use <code>F2</code> to rename,{" "}
            <code>Delete</code> to remove, and <code>Shift + Delete</code> for
            permanent deletion—speed up your workflow like a pro!
          </li>
        </ul>

        <h3>⚠️ Known Issues</h3>
        <ul>
          <li>
            Some functionalities are still in development and may have limited
            capabilities or bugs. Your feedback is crucial in helping us
            improve!
          </li>
          <li>
            Performance optimizations are ongoing; navigating large directories
            may impact speed temporarily.
          </li>
        </ul>

        <p>
          We encourage you to explore the app, provide feedback, and help us
          shape it into the best file management tool out there. Stay tuned for
          more updates!
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/JotWaraich/file-manager",
    github: true,
    title: "File Manager",
    description: "A simple file manager built with Python and PyQt5.",
    thumbnail: "/images/fileManager1.png",
    images: ["/images/fileManager1.png", "/images/fileManager2.png"],
    stack: ["Python", "PyQT5"],
    slug: "file-manager",
    content: (
      <div>
        <h2>🗂️ File Manager v0.1 Alpha Release!</h2>
        <p>
          We are excited to present the alpha release of our new File Manager
          application, built with Python and PyQt5. This lightweight yet
          powerful tool is designed to simplify file management tasks with an
          intuitive interface and essential features.
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>File Navigation:</strong> Effortlessly browse through your
            drives and directories with a simple, user-friendly interface.
          </li>
          <li>
            <strong>File Operations:</strong> Perform essential operations like
            opening, copying, cutting, pasting, deleting, and renaming files
            with ease.
          </li>
          <li>
            <strong>Create Files:</strong> Quickly create new files in various
            formats directly from the app.
          </li>
          <li>
            <strong>Handy Shortcuts:</strong> Use <code>F2</code> to rename,{" "}
            <code>Delete</code> to remove, and <code>Shift + Delete</code> for
            permanent deletion—enhance your productivity with these shortcuts.
          </li>
        </ul>

        <h3>⚙️ Installation</h3>
        <p>
          Ready to get started? Download the executable file from the
          &quot;Assets&quot; section on the releases tab, extract the zip
          folder, and run it on your system. No complex setup required!
        </p>

        <h3>⚠️ Known Issues</h3>
        <ul>
          <li>
            This is an alpha release; some functionalities may be limited or
            have bugs. We appreciate your feedback to help us improve the
            application!
          </li>
          <li>
            Performance may vary when navigating large directories. Optimization
            is ongoing.
          </li>
        </ul>

        <p>
          We encourage you to try out the File Manager, share your feedback, and
          help us refine it to be the best tool for managing files. Stay tuned
          for future updates and new features!
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/JotWaraich/Simple-Markdown-Editor",
    github: true,
    title: "Markdown Editor",
    description: "A simple markdown editor built with Python and PyQt5.",
    thumbnail: "/images/mdEditor1.png",
    images: ["/images/mdEditor1.png", "/images/mdEditor2.png"],
    stack: ["Python", "PyQT5"],
    slug: "markdown-editor",
    content: (
      <div>
        <h2>📝 Markdown Editor v1.0.0 Released!</h2>
        <p>
          We are thrilled to introduce the initial release of our Markdown
          Editor—an intuitive and lightweight application designed to make
          writing and previewing Markdown seamless. This release provides the
          fundamental tools to help you get started with Markdown editing right
          away.
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>Basic File Operations:</strong> Easily open, save, and exit
            files with a straightforward interface, built with PyQt5 for a clean
            and modern look.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> A simple, clutter-free
            design that allows you to focus on writing without distractions.
          </li>
        </ul>

        <h3>⚙️ Installation</h3>
        <p>
          Ready to get started? Download the executable file from the
          &quot;Assets&quot; section from releases tab, extract the zip folder
          and run it on your system. No complex setup required!
        </p>

        <h3>⚠️ Known Issues</h3>
        <ul>
          <li>
            This is the initial release; some features might be limited or still
            under development. Your feedback will be invaluable in shaping the
            next version!
          </li>
        </ul>

        <p>
          We encourage you to try out the Markdown Editor and share your
          thoughts, suggestions, or any bugs you encounter. Your input will help
          us refine and expand the tool. Stay tuned for more updates!
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/JotWaraich/File-Sorting",
    github: true,
    title: "File Sorting",
    description: "A simple file sorting app built with Python.",
    thumbnail: "/images/fileSorting1.png",
    images: ["/images/fileSorting1.png", "/images/fileSorting2.png"],
    stack: ["Python"],
    slug: "file-sorting",
    content: (
      <div>
        <h2>📂 File Sorting App - Simplify Your File Organization!</h2>
        <p>
          We are excited to announce the release of our File Sorting
          application—a straightforward and effective tool built with Python to
          help you keep your files neatly organized. No more cluttered
          directories—this app does the heavy lifting for you by sorting files
          into categorized folders!
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>Smart File Organization:</strong> Automatically sorts files
            into categorized folders such as <code>Audio</code>,{" "}
            <code>Video</code>, <code>Images</code>, and more, making it easier
            to find what you need.
          </li>
          <li>
            <strong>Customizable Sorting:</strong> The app is flexible enough to
            adapt to different file extensions and sorting criteria, making it
            highly customizable for different use cases.
          </li>
          <li>
            <strong>Efficiency at Its Best:</strong> With a single click,
            organize hundreds of files in seconds—saving you valuable time and
            keeping your workspace tidy.
          </li>
        </ul>

        <h3>⚙️ Recent Improvements</h3>
        <p>
          In the latest version, we’ve enhanced the sorting logic to group
          common file types into more generalized categories like{" "}
          <code>Audio</code>, <code>Video</code>, <code>Images</code>, and{" "}
          <code>Documents</code>, instead of creating separate folders for each
          file extension. This results in a cleaner and more organized directory
          structure.
        </p>

        <h3>⚙️ Installation</h3>
        <p>
          Ready to declutter your files? Simply download the executable file
          from the &quot;Assets&quot; section on the releases tab, extract the
          zip folder, and run the application. No complex setup required!
        </p>

        <h3>⚠️ Known Issues</h3>
        <ul>
          <li>
            As this is the initial release, some features might be limited or
            still under development. We value your feedback to help us improve
            and expand the functionality!
          </li>
        </ul>

        <p>
          Give the File Sorting app a try and let us know how it works for you!
          Your suggestions and bug reports are crucial in making this tool
          better for everyone. Stay tuned for future updates and improvements!
        </p>
      </div>
    ),
  },
  {
    href: "https://game-discount.vercel.app/",
    github: false,
    title: "Game Discount",
    description:
      "A game discount tracking app built with Next.js and Tailwind CSS.",
    thumbnail: "/images/gameDiscount1.png",
    images: [
      "/images/gameDiscount1.png",
      "/images/gameDiscount2.png",
      "/images/gameDiscount3.png",
    ],
    stack: ["Next.js", "Tailwind CSS"],
    slug: "game-discount",
    content: (
      <div>
        <h2>🎮 Game Discount Tracker - Find the Best Deals!</h2>
        <p>
          Discover the best deals on games across various online stores with our
          Game Discount app. Built with <strong>Next.js</strong> and{" "}
          <strong>Tailwind CSS</strong>, this web app provides a simple and fast
          way to search for your favorite games and find the best discounts
          available.
        </p>

        <h3>✨ Key Features</h3>
        <ul>
          <li>
            <strong>Comprehensive Game Search:</strong> Easily search for games
            and instantly see prices from multiple stores, helping you find the
            best deals.
          </li>
          <li>
            <strong>Store-Specific Deals:</strong> View the best deals available
            for a specific store, allowing you to compare prices and save money
            on your favorite games.
          </li>
          <li>
            <strong>Responsive Design:</strong> The app is designed with
            Tailwind CSS, providing a sleek and modern interface that works
            seamlessly on both desktop and mobile devices.
          </li>
          <li>
            <strong>Real-Time Data:</strong> Get the most up-to-date prices and
            discounts on games, ensuring you never miss a great deal.
          </li>
        </ul>

        <h3>⚙️ How to Use</h3>
        <p>
          Simply visit the website, use the search bar to find a specific game,
          or browse through store-specific deals. The intuitive and fast
          interface makes it easy to find the best deals available.
        </p>

        <h3>📢 Feedback and Suggestions</h3>
        <p>
          We encourage you to explore the Game Discount app and share your
          feedback. Your suggestions will help us enhance the app further,
          providing a better experience for all gamers. Stay tuned for updates
          and new features!
        </p>
      </div>
    ),
  },
];
