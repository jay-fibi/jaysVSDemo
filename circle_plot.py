import matplotlib.pyplot as plt

# Create a figure and an axes
fig, ax = plt.subplots()

# Set the aspect of the plot to be equal, so the circle isn't distorted
ax.set_aspect('equal')

# Define the circle's parameters
circle = plt.Circle((0, 0), 1, edgecolor='b', facecolor='none')

# Add the circle to the plot
ax.add_artist(circle)

# Set the limits of the plot
ax.set_xlim(-1.5, 1.5)
ax.set_ylim(-1.5, 1.5)

# Display the plot
plt.title('Perfect Circle')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()
