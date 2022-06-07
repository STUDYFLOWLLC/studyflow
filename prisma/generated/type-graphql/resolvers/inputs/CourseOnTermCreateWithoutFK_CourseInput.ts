import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutFK_CourseOnTermInput";
import { TermCreateNestedOneWithoutFK_CourseOnTermInput } from "../inputs/TermCreateNestedOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname?: string | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedOneWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  FK_Term!: TermCreateNestedOneWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
