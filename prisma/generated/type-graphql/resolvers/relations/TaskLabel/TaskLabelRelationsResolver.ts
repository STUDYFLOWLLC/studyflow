import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { TaskLabel } from "../../../models/TaskLabel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskLabel)
export class TaskLabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async FK_Task(@TypeGraphQL.Root() taskLabel: TaskLabel, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).taskLabel.findUnique({
      where: {
        TaskLabelID: taskLabel.TaskLabelID,
      },
    }).FK_Task({});
  }
}
