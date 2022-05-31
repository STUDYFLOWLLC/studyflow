import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserScalarWhereInput } from "../inputs/CourseOnUserScalarWhereInput";
import { CourseOnUserUpdateManyMutationInput } from "../inputs/CourseOnUserUpdateManyMutationInput";

@TypeGraphQL.InputType("CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserUpdateManyWithWhereWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnUserScalarWhereInput, {
    nullable: false
  })
  where!: CourseOnUserScalarWhereInput;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnUserUpdateManyMutationInput;
}
