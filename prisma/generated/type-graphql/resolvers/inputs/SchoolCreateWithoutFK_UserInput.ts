import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedManyWithoutFK_SchoolInput } from "../inputs/CourseCreateNestedManyWithoutFK_SchoolInput";
import { ProfessorCreateNestedManyWithoutFK_SchoolInput } from "../inputs/ProfessorCreateNestedManyWithoutFK_SchoolInput";
import { TermCreateNestedManyWithoutFK_SchoolInput } from "../inputs/TermCreateNestedManyWithoutFK_SchoolInput";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("SchoolCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SearchIndex?: string | undefined;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  TermType?: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedManyWithoutFK_SchoolInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedManyWithoutFK_SchoolInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateNestedManyWithoutFK_SchoolInput, {
    nullable: true
  })
  FK_Professor?: ProfessorCreateNestedManyWithoutFK_SchoolInput | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedManyWithoutFK_SchoolInput, {
    nullable: true
  })
  Term?: TermCreateNestedManyWithoutFK_SchoolInput | undefined;
}
