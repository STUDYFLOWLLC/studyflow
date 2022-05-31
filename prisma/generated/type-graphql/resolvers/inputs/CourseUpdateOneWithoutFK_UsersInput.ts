import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutFK_UsersInput } from "../inputs/CourseCreateOrConnectWithoutFK_UsersInput";
import { CourseCreateWithoutFK_UsersInput } from "../inputs/CourseCreateWithoutFK_UsersInput";
import { CourseUpdateWithoutFK_UsersInput } from "../inputs/CourseUpdateWithoutFK_UsersInput";
import { CourseUpsertWithoutFK_UsersInput } from "../inputs/CourseUpsertWithoutFK_UsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateOneWithoutFK_UsersInput", {
  isAbstract: true
})
export class CourseUpdateOneWithoutFK_UsersInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_UsersInput, {
    nullable: true
  })
  create?: CourseCreateWithoutFK_UsersInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutFK_UsersInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_UsersInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpsertWithoutFK_UsersInput, {
    nullable: true
  })
  upsert?: CourseUpsertWithoutFK_UsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutFK_UsersInput, {
    nullable: true
  })
  update?: CourseUpdateWithoutFK_UsersInput | undefined;
}
