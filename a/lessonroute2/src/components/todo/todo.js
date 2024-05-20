import { Button } from "../button/button";
import styles from "./todo.module.css";
import { NavLink,useParams } from "react-router-dom";
import NotFound from "../not-found/not-found";

export const Todo = ({
  id,
  title,
  completed,
  isEditing,
  onEdit,
  onTitleChange,
  onCompletedChange,
  onSave,
  onRemove,
}) => {

  return (
    <>

      <div className={styles.todo}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={({ target }) => onCompletedChange(target.checked)}
        />
        <div className={styles.title}>
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={({ target }) => onTitleChange(target.value)}
            />
          ) : (
            <>
              <NavLink to={`/task/${id}`}>
                {({ isActive }) =>
                  isActive ? (
                    <div>
                      {title ? (
                        <>
                          <div> {title}</div>
                          <div className={styles.todoInput}>
                            <Button onClick={onEdit}>📝</Button>
                            <Button onClick={onRemove}>✖</Button>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <div>
                      {title && title.length > 30
                        ? title.slice(0, 30) + "..."
                        : title}
                    </div>
                  )
                }
              </NavLink>
            </>
          )}
        </div>
        <div>
          <Button onClick={onSave}>✎</Button>
        </div>
      </div>
    </>
  );
};
