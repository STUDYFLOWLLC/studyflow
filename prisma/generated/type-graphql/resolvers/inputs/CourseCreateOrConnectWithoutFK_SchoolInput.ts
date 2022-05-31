import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_SchoolInput } from "../inputs/CourseCreateWithoutFK_SchoolInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_SchoolInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_SchoolInput;
}
