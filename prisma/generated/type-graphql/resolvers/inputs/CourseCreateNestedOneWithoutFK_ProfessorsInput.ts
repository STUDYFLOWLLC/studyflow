import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutFK_ProfessorsInput } from "../inputs/CourseCreateOrConnectWithoutFK_ProfessorsInput";
import { CourseCreateWithoutFK_ProfessorsInput } from "../inputs/CourseCreateWithoutFK_ProfessorsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutFK_ProfessorsInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutFK_ProfessorsInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_ProfessorsInput, {
    nullable: true
  })
  create?: CourseCreateWithoutFK_ProfessorsInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutFK_ProfessorsInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_ProfessorsInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
