import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_TasksInput";
import { CourseOnTermCreateWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateWithoutFK_TasksInput";
import { CourseOnTermUpdateWithoutFK_TasksInput } from "../inputs/CourseOnTermUpdateWithoutFK_TasksInput";
import { CourseOnTermUpsertWithoutFK_TasksInput } from "../inputs/CourseOnTermUpsertWithoutFK_TasksInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class CourseOnTermUpdateOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpsertWithoutFK_TasksInput, {
    nullable: true
  })
  upsert?: CourseOnTermUpsertWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_TasksInput, {
    nullable: true
  })
  update?: CourseOnTermUpdateWithoutFK_TasksInput | undefined;
}
