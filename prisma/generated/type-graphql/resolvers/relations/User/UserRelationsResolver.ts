import * as TypeGraphQL from "type-graphql";
import { CourseOnUser } from "../../../models/CourseOnUser";
import { FlashCardStack } from "../../../models/FlashCardStack";
import { Flow } from "../../../models/Flow";
import { FlowTag } from "../../../models/FlowTag";
import { User } from "../../../models/User";
import { UserFK_CoursesArgs } from "./args/UserFK_CoursesArgs";
import { UserFK_FlashCardStacksArgs } from "./args/UserFK_FlashCardStacksArgs";
import { UserFK_FlowTagsArgs } from "./args/UserFK_FlowTagsArgs";
import { UserFK_FlowsArgs } from "./args/UserFK_FlowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CourseOnUser], {
    nullable: false
  })
  async FK_Courses(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_CoursesArgs): Promise<CourseOnUser[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Courses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Flow], {
    nullable: false
  })
  async FK_Flows(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FlowsArgs): Promise<Flow[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_Flows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FlowTag], {
    nullable: false
  })
  async FK_FlowTags(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FlowTagsArgs): Promise<FlowTag[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FlowTags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [FlashCardStack], {
    nullable: false
  })
  async FK_FlashCardStacks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFK_FlashCardStacksArgs): Promise<FlashCardStack[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        UserID: user.UserID,
      },
    }).FK_FlashCardStacks(args);
  }
}
