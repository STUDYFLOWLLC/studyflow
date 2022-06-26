import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermScalarWhereInput } from "../inputs/CourseOnTermScalarWhereInput";
import { CourseOnTermUpdateManyMutationInput } from "../inputs/CourseOnTermUpdateManyMutationInput";

@TypeGraphQL.InputType("CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermUpdateManyWithWhereWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => CourseOnTermScalarWhereInput, {
    nullable: false
  })
  where!: CourseOnTermScalarWhereInput;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnTermUpdateManyMutationInput;
}
