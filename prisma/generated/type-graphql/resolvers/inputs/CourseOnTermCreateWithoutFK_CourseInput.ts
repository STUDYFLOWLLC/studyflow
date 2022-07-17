import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutFK_CourseOnTermInput";
import { TaskCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateNestedManyWithoutFK_CourseOnTermInput";
import { TermCreateNestedOneWithoutFK_CourseOnTermInput } from "../inputs/TermCreateNestedOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Index?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsNew?: boolean | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedOneWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermCreateNestedOneWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
